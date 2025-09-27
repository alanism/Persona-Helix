/**
 * Represents metadata common to different data files.
 */
export interface Metadata {
  title: string;
  version: string;
  description: string;
}

/**
 * Represents a single question in a questionnaire.
 */
export interface Question {
  id: string;
  axis: string;
  /** Indicates if the question's score should be reversed during scoring. */
  isReverseScored: boolean;
  prompt: string;
  type: 'likert';
}

/**
 * Defines the structure for the entire questionnaire data file.
 */
export interface QuestionnaireData {
  metadata: Metadata;
  scale: {
    type: string;
    labels: string[];
  };
  items: Question[];
}

/**
 * Represents a single scoring axis (e.g., EI, SN, Social).
 */
export interface ScoringAxis {
  key: string;
  name?: string;
  low: string;
  high: string;
  items: string[];
  reverse_items: string[];
}

/**
 * A generic persona type for descriptions.
 */
export interface PersonaInfo {
  name: string;
  blurb: string;
  summary?: string; // summary is specific to MBTI for the explorer
}

/**
 * Defines the structure for the scoring logic data file.
 */
export interface ScoringData {
  metadata: Metadata;
  axes: ScoringAxis[];
  thresholds: {
    midpoint: number;
    tie_low: number;
    tie_high: number;
  };
  mbti_types?: { // This is now optional as descriptions are moved
    [key: string]: PersonaInfo;
  };
}


/**
 * A dictionary mapping question IDs to the user's numeric answer.
 */
export interface Answers {
  [questionId: string]: number;
}

/**
 * Represents the calculated result for a single personality axis.
 */
export interface AxisResult {
  key: string;
  score: number;
  letter: string;
  name: string;
}

/**
 * Represents the final, comprehensive personality result, including MBTI, Prism, and QuEST profiles.
 */
export interface PersonalityResult {
  mbti: {
    type: string;
    name: string;
    blurb: string;
    axes: AxisResult[];
  };
  prism: {
    code: string;
    name: string;
    blurb: string;
    axes: AxisResult[];
  };
  quest: {
    type: string;
    name: string;
    blurb: string;
    axes: AxisResult[];
  };
}