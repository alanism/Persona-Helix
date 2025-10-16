import type { ScoringData } from '../types';

export const quest15Scoring: ScoringData = {
  metadata: {
    title: "QuEST – 24 Items Scoring",
    version: "2.0.0",
    description:
      "QuEST axes scoring with original 15 items. +9 domain items included as predictorsOnly for behavior/decision-style prediction."
  },
  axes: [
    { key: "Q", name: "Reasoning",        low: "P", high: "Q", items: ["QQ1","QQ2","QQ3"],           reverse_items: ["QQ2"] },
    { key: "E", name: "Social Judgment",  low: "D", high: "E", items: ["QQ4","QQ5","QQ6","QQ7"],     reverse_items: ["QQ5"] },
    { key: "S", name: "Steadiness",       low: "V", high: "S", items: ["QQ8","QQ9","QQ10","QQ11"],   reverse_items: ["QQ9","QQ11"] },
    { key: "T", name: "Tenacity",         low: "F", high: "T", items: ["QQ12","QQ13","QQ14","QQ15"], reverse_items: ["QQ13","QQ15"] }
  ],
  thresholds: {
    midpoint: 4.0,
    tie_low: 3.6,
    tie_high: 4.4
  },
  predictors_only: [
    // Income Inequality
    { id: "QQ16", axis_hint: "Q", reverse: false },
    { id: "QQ17", axis_hint: "E", reverse: false },
    { id: "QQ18", axis_hint: "T", reverse: false },

    // AI
    { id: "QQ19", axis_hint: "Q", reverse: false },
    { id: "QQ20", axis_hint: "E", reverse: false },
    { id: "QQ21", axis_hint: "S", reverse: false },

    // Geopolitics
    { id: "QQ22", axis_hint: "T", reverse: false },
    { id: "QQ23", axis_hint: "E", reverse: false },
    { id: "QQ24", axis_hint: "Q", reverse: false },

    // Age Generations
    { id: "QQ25", axis_hint: "S", reverse: false },
    { id: "QQ26", axis_hint: "E", reverse: false },
    { id: "QQ27", axis_hint: "T", reverse: false },

    // Social Networks
    { id: "QQ28", axis_hint: "E", reverse: false },
    { id: "QQ29", axis_hint: "Q", reverse: false },
    { id: "QQ30", axis_hint: "S", reverse: false },

    // UAP/UFO
    { id: "QQ31", axis_hint: "Q", reverse: false },
    { id: "QQ32", axis_hint: "S", reverse: false },
    { id: "QQ33", axis_hint: "E", reverse: false },

    // Genetics
    { id: "QQ34", axis_hint: "Q", reverse: false },
    { id: "QQ35", axis_hint: "E", reverse: false },
    { id: "QQ36", axis_hint: "T", reverse: false },

    // Environmental
    { id: "QQ37", axis_hint: "S", reverse: false },
    { id: "QQ38", axis_hint: "Q", reverse: true },
    { id: "QQ39", axis_hint: "E", reverse: false },

    // Investing
    { id: "QQ40", axis_hint: "T", reverse: false },
    { id: "QQ41", axis_hint: "Q", reverse: false },
    { id: "QQ42", axis_hint: "E", reverse: true }
  ],
  mbti_types: {}
};