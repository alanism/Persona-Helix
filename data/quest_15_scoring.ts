import type { ScoringData } from '../types';

export const quest15Scoring: ScoringData = {
  "metadata": {
    "title": "QuEST – 15 Items Scoring",
    "version": "1.0.0",
    "description": "Scoring rules for QuEST 15-item set (Q, E, S, T)."
  },
  "axes": [
    { "key": "Q", "name": "Reasoning",        "low": "P", "high": "Q", "items": ["QQ1","QQ2","QQ3"],             "reverse_items": ["QQ2"] },
    { "key": "E", "name": "Social Judgment",  "low": "D", "high": "E", "items": ["QQ4","QQ5","QQ6","QQ7"],       "reverse_items": ["QQ5"] },
    { "key": "S", "name": "Steadiness",       "low": "V", "high": "S", "items": ["QQ8","QQ9","QQ10","QQ11"],     "reverse_items": ["QQ9","QQ11"] },
    { "key": "T", "name": "Tenacity",         "low": "F", "high": "T", "items": ["QQ12","QQ13","QQ14","QQ15"],   "reverse_items": ["QQ13","QQ15"] }
  ],
  "thresholds": {
    "midpoint": 4.0,
    "tie_low": 3.6,
    "tie_high": 4.4
  }
};
