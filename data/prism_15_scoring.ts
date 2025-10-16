import type { ScoringData } from '../types';

export const prism15Scoring: ScoringData = {
  metadata: {
    title: "PRISM – 24 Items Scoring",
    version: "2.0.0",
    description:
      "PRISM axes scoring with original 15 items. +9 domain items included as predictorsOnly for worldview/stance analytics."
  },
  axes: [
    { key: "S", name: "Social",   low: "F", high: "B", items: ["PR1","PR2","PR3","PR4"],    reverse_items: ["PR2","PR4"] },
    { key: "C", name: "Cultural", low: "T", high: "X", items: ["PR5","PR6","PR7"],          reverse_items: ["PR6"] },
    { key: "E", name: "Economic", low: "N", high: "M", items: ["PR8","PR9","PR10","PR11"],  reverse_items: ["PR10","PR11"] },
    { key: "P", name: "Political",low: "C", high: "L", items: ["PR12","PR13","PR14","PR15"],reverse_items: ["PR13","PR15"] }
  ],
  thresholds: {
    midpoint: 4.0,
    tie_low: 3.6,
    tie_high: 4.4
  },
  predictors_only: [
    // Income Inequality
    { id: "PR16", axis_hint: "E", reverse: false },
    { id: "PR17", axis_hint: "S", reverse: false },
    { id: "PR18", axis_hint: "C", reverse: false },

    // AI
    { id: "PR19", axis_hint: "P", reverse: false },
    { id: "PR20", axis_hint: "E", reverse: false },
    { id: "PR21", axis_hint: "C", reverse: false },

    // Geopolitics
    { id: "PR22", axis_hint: "P", reverse: true },
    { id: "PR23", axis_hint: "E", reverse: false },
    { id: "PR24", axis_hint: "C", reverse: true },

    // Age Generations
    { id: "PR25", axis_hint: "S", reverse: false },
    { id: "PR26", axis_hint: "C", reverse: false },
    { id: "PR27", axis_hint: "E", reverse: false },

    // Social Networks
    { id: "PR28", axis_hint: "P", reverse: false },
    { id: "PR29", axis_hint: "C", reverse: false },
    { id: "PR30", axis_hint: "S", reverse: true },

    // UAP/UFO
    { id: "PR31", axis_hint: "P", reverse: false },
    { id: "PR32", axis_hint: "C", reverse: false },
    { id: "PR33", axis_hint: "E", reverse: false },

    // Genetics
    { id: "PR34", axis_hint: "C", reverse: false },
    { id: "PR35", axis_hint: "S", reverse: false },
    { id: "PR36", axis_hint: "P", reverse: false },

    // Environmental
    { id: "PR37", axis_hint: "P", reverse: false },
    { id: "PR38", axis_hint: "C", reverse: false },
    { id: "PR39", axis_hint: "E", reverse: false },

    // Investing
    { id: "PR40", axis_hint: "E", reverse: false },
    { id: "PR41", axis_hint: "S", reverse: false },
    { id: "PR42", axis_hint: "C", reverse: true }
  ],
  mbti_types: {}
};