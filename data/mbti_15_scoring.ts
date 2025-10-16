import type { ScoringData } from '../types';

export const mbti15Scoring: ScoringData = {
  metadata: {
    title: "MBTI – 24 Items Scoring",
    version: "2.0.0",
    description:
      "MBTI axes scoring with original 15 items. +9 domain items included as predictorsOnly (excluded from axis scoring). Tie-band thresholds unchanged pending re-norm."
  },
  axes: [
    { key: "EI", low: "I", high: "E", items: ["MB1","MB2","MB3"], reverse_items: ["MB2"] },
    { key: "SN", low: "S", high: "N", items: ["MB4","MB5","MB6","MB7"], reverse_items: ["MB5","MB7"] },
    { key: "TF", low: "F", high: "T", items: ["MB8","MB9","MB10","MB11"], reverse_items: ["MB9","MB11"] },
    { key: "JP", low: "P", high: "J", items: ["MB12","MB13","MB14","MB15"], reverse_items: ["MB13","MB15"] }
  ],
  thresholds: {
    midpoint: 4.0,
    tie_low: 3.6,
    tie_high: 4.4
  },
  // The following items are included in the instrument but excluded from axis scoring.
  predictors_only: [
    // Income Inequality (3)
    { id: "MB16", axis_hint: "TF", reverse: false },
    { id: "MB17", axis_hint: "SN", reverse: true },
    { id: "MB18", axis_hint: "EI", reverse: false },

    // AI (3)
    { id: "MB19", axis_hint: "TF", reverse: false },
    { id: "MB20", axis_hint: "SN", reverse: false },
    { id: "MB21", axis_hint: "JP", reverse: true },

    // Geopolitics (3)
    { id: "MB22", axis_hint: "EI", reverse: false },
    { id: "MB23", axis_hint: "TF", reverse: false },
    { id: "MB24", axis_hint: "JP", reverse: false },

    // Age Generations (3)
    { id: "MB25", axis_hint: "SN", reverse: true },
    { id: "MB26", axis_hint: "EI", reverse: false },
    { id: "MB27", axis_hint: "TF", reverse: true },

    // Social Networks (3)
    { id: "MB28", axis_hint: "EI", reverse: false },
    { id: "MB29", axis_hint: "SN", reverse: false },
    { id: "MB30", axis_hint: "JP", reverse: false },

    // UAP/UFO (3)
    { id: "MB31", axis_hint: "TF", reverse: false },
    { id: "MB32", axis_hint: "SN", reverse: false },
    { id: "MB33", axis_hint: "EI", reverse: false },

    // Genetics (3)
    { id: "MB34", axis_hint: "SN", reverse: false },
    { id: "MB35", axis_hint: "TF", reverse: false },
    { id: "MB36", axis_hint: "EI", reverse: true },

    // Environmental (3)
    { id: "MB37", axis_hint: "JP", reverse: false },
    { id: "MB38", axis_hint: "SN", reverse: false },
    { id: "MB39", axis_hint: "EI", reverse: false },

    // Investing (3)
    { id: "MB40", axis_hint: "TF", reverse: false },
    { id: "MB41", axis_hint: "SN", reverse: true },
    { id: "MB42", axis_hint: "EI", reverse: false }
  ],
  mbti_types: {}
};