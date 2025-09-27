import React from 'react';
import type { PersonalityResult } from '../types';
import MbtiExplorer from './MbtiExplorer';
import PrismExplorer from './PrismExplorer';
import QuestExplorer from './QuestExplorer';
import CombinationAnalysis from './CombinationAnalysis';
import { PersonalityCard } from './PersonalityCard';

interface ResultsPageProps {
  results: PersonalityResult;
  onReset: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ results, onReset }) => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-slate-900">Your Persona Results</h2>
            <p className="text-slate-600 mt-2">Discover the unique blend of your cognitive, value, and operational styles.</p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-200 shadow-lg">
              <div className="prose prose-lg prose-slate max-w-none text-slate-600 space-y-4">
                  <p>
                      Single scores hide the plot. Your Helix doesn’t.
                  </p>
                  <ul className="space-y-2 !my-4">
                      <li><strong>MBTI</strong> shows how you like to work—energy, information, decisions, pace.</li>
                      <li><strong>PRISM</strong> shows what you believe should happen—structure, culture, markets, power.</li>
                      <li><strong>QuEST</strong> shows how you perform under load—reasoning, social judgment, steadiness, tenacity.</li>
                  </ul>
                  <p>
                      Each axis comes with tilt and confidence. Tilt tells you the side. Confidence tells you the strength. Balanced means you flex; strong means you have a reliable lane. That’s the point: not a label—a playbook.
                  </p>
                  <p className="font-semibold text-slate-700">What to do right now:</p>
                  <ul className="list-disc pl-5 space-y-2 !my-4">
                      <li>Set the room to your <strong>MBTI</strong> (meeting style, decision cadence).</li>
                      <li>Frame decisions with your <strong>PRISM</strong> lens (what “good” looks like to you).</li>
                      <li>Run under pressure using your <strong>QuEST</strong> (how you stay clear and finish).</li>
                  </ul>
                  <p>
                      You’ll see fewer misfits, faster ramps, cleaner wins when your context matches your Helix. Ready for the fast version?
                  </p>
                  <p className="font-semibold text-slate-700">
                      Run AI Analysis and get your tailored predictions—Career Best Fits, Potential Blind Spots, Likely Parenting/Teaching/Coaching Style, and Consumer & Lifestyle Tastes—all synthesized from your three signals with concrete next steps.
                  </p>
              </div>
          </div>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <PersonalityCard
            type="mbti"
            title="Cognitive Style (MBTI)"
            mainId={results.mbti.type}
            name={results.mbti.name}
            blurb={results.mbti.blurb}
            axesData={results.mbti.axes}
            headingColorClass="text-orange-500"
            dichotomyColor="orange"
          />
          <PersonalityCard
            type="prism"
            title="Value Lens (Prism)"
            mainId={results.prism.code}
            name={results.prism.name}
            blurb={results.prism.blurb}
            axesData={results.prism.axes}
            headingColorClass="text-teal-500"
            dichotomyColor="teal"
          />
          <PersonalityCard
            type="quest"
            title="Operational Style (QuEST)"
            mainId={results.quest.type}
            name={results.quest.name}
            blurb={results.quest.blurb}
            axesData={results.quest.axes}
            headingColorClass="text-indigo-500"
            dichotomyColor="indigo"
          />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-8">
        <MbtiExplorer />
        <PrismExplorer />
        <QuestExplorer />
      </div>
      
      <CombinationAnalysis results={results} />

      <div className="mt-12 text-center">
        <button
          onClick={onReset}
          className="bg-gradient-to-r from-orange-500 via-teal-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
        >
          Take the Quiz Again
        </button>
      </div>
    </div>
  );
};