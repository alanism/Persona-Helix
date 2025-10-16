import type { Answers, PersonalityResult, AxisResult as UIAxisResult, ScoringData } from '../types';
import { mbti15Scoring } from '../data/mbti_15_scoring';
import { prism15Scoring } from '../data/prism_15_scoring';
import { quest15Scoring } from '../data/quest_15_scoring';
import { getPersona } from '../data/personaDescriptions';

// SCORING ENGINE LOGIC (ADAPTED FROM WRAPPER)
// These types are internal to the scoring engine
type Tilt = 'low' | 'high' | 'balanced';

type EngineAxisResult = {
  key: string;
  name?: string;
  mean: number | null;
  tilt: Tilt;
  lowLetter: string;
  highLetter: string;
  tiltLetter: string | null;
  itemCount: number;
  confidence: number;
};

type ToolScore = {
  tool: 'MBTI' | 'PRISM' | 'QuEST';
  axes: Record<string, EngineAxisResult>;
  code: string | null;
};

type TriStackScores = {
  mbti: ToolScore;
  prism: ToolScore;
  quest: ToolScore;
};

const reverseLikert7 = (x: number) => 8 - x;

function confidenceFromMean(mean: number, midpoint: number, tieLow: number, tieHigh: number): number {
  const dist = Math.abs(mean - midpoint);
  const tieHalfWidth = Math.abs(tieHigh - midpoint);
  const maxDist = 3;
  if (dist <= tieHalfWidth) return 0;
  const num = dist - tieHalfWidth;
  const den = maxDist - tieHalfWidth;
  return Math.max(0, Math.min(1, num / den));
}

function scoreWithConfig(scoring: ScoringData, responses: Record<string, number>, toolLabel: ToolScore['tool']): ToolScore {
  const midpoint = scoring.thresholds?.midpoint ?? 4.0;
  const tieLow = scoring.thresholds?.tie_low ?? 3.6;
  const tieHigh = scoring.thresholds?.tie_high ?? 4.4;

  const axes: Record<string, EngineAxisResult> = {};

  for (const ax of scoring.axes) {
    const key = ax.key;
    const name = ax.name;
    const lowLetter = ax.low;
    const highLetter = ax.high;
    const items = ax.items;
    const reverse = new Set<string>(ax.reverse_items ?? []);

    const used: number[] = [];
    for (const id of items) {
      const val = responses[id];
      if (typeof val === 'number' && val >= 1 && val <= 7) {
        used.push(reverse.has(id) ? reverseLikert7(val) : val);
      }
    }

    const mean = used.length ? used.reduce((a, b) => a + b, 0) / used.length : null;

    let tilt: Tilt = 'balanced';
    let tiltLetter: string | null = null;
    let conf = 0;

    if (mean !== null) {
      if (mean > tieHigh) {
        tilt = 'high';
        tiltLetter = highLetter;
      } else if (mean < tieLow) {
        tilt = 'low';
        tiltLetter = lowLetter;
      }
      conf = confidenceFromMean(mean, midpoint, tieLow, tieHigh);
    }
    
    axes[key] = { key, name, mean, tilt, lowLetter, highLetter, tiltLetter, itemCount: used.length, confidence: conf };
  }
  
  const allLetters = scoring.axes.map(ax => axes[ax.key]?.tiltLetter);
  const code = allLetters.every(l => typeof l === 'string' && l.length === 1) ? allLetters.join('') : null;

  return { tool: toolLabel, axes, code };
}

function scoreTriStack(responses: Record<string, number>): TriStackScores {
  const mbti = scoreWithConfig(mbti15Scoring, responses, 'MBTI');
  const prism = scoreWithConfig(prism15Scoring, responses, 'PRISM');
  const quest = scoreWithConfig(quest15Scoring, responses, 'QuEST');
  return { mbti, prism, quest };
}

function mbtiTypeWithX(mbti: ToolScore): string {
  const order = ['EI', 'SN', 'TF', 'JP'];
  return order.map(k => mbti.axes[k]?.tiltLetter ?? 'X').join('');
}
function questCodeWithDot(quest: ToolScore): string {
  const order = ['Q', 'E', 'S', 'T'];
  return order.map(k => quest.axes[k]?.tiltLetter ?? '•').join('');
}


// MAIN EXPORTED FUNCTION
export const calculateResults = (answers: Answers): PersonalityResult => {
  const scores = scoreTriStack(answers);

  // --- MBTI Processing ---
  const mbtiType = mbtiTypeWithX(scores.mbti);
  const mbtiPersona = getPersona('MBTI', mbtiType) || { name: 'Unique Cognitive Style', blurb: 'Your cognitive combination is unique.' };
  const mbtiAxes: UIAxisResult[] = Object.values(scores.mbti.axes).map(ax => ({
    key: ax.key,
    score: ax.mean ?? 4.0,
    letter: ax.tiltLetter ?? 'X',
    name: ax.name || ax.key,
  }));

  // --- PRISM Processing ---
  const prismCode = scores.prism.code || '----';
  const prismPersona = getPersona('PRISM', prismCode) || { name: 'Unique Value Code', blurb: 'Your values combination is unique.' };
  const prismAxes: UIAxisResult[] = Object.values(scores.prism.axes).map(ax => ({
    key: ax.key,
    score: ax.mean ?? 4.0,
    letter: ax.tiltLetter ?? '-',
    name: ax.name || ax.key,
  }));
  
  // --- QuEST Processing ---
  const questType = questCodeWithDot(scores.quest);
  // Fix: Changed 'QUEST' to 'QuEST' to match the `ToolKey` type definition.
  const questPersona = getPersona('QuEST', scores.quest.code || '') || { name: 'Unique Operational Style', blurb: 'Your operational combination is unique.' };
   const questAxes: UIAxisResult[] = Object.values(scores.quest.axes).map(ax => ({
    key: ax.key,
    score: ax.mean ?? 4.0,
    letter: ax.tiltLetter ?? '•',
    name: ax.name || ax.key,
  }));

  return {
    mbti: {
      type: mbtiType,
      name: mbtiPersona.name,
      blurb: mbtiPersona.blurb,
      axes: mbtiAxes,
    },
    prism: {
      code: prismCode,
      name: prismPersona.name,
      blurb: prismPersona.blurb,
      axes: prismAxes,
    },
    quest: {
      type: questType,
      name: questPersona.name,
      blurb: questPersona.blurb,
      axes: questAxes,
    },
  };
};