import type { ScoringData } from '../types';

export const mbti15Scoring: ScoringData = {
  "metadata": {
    "title": "MBTI – 15 Items Scoring",
    "version": "1.0.0",
    "description": "Scoring rules for MBTI 15-item set (EI, SN, TF, JP). Includes tie-band thresholds."
  },
  "axes": [
    { "key": "EI", "low": "I", "high": "E", "items": ["MB1","MB2","MB3"], "reverse_items": ["MB2"] },
    { "key": "SN", "low": "S", "high": "N", "items": ["MB4","MB5","MB6","MB7"], "reverse_items": ["MB5","MB7"] },
    { "key": "TF", "low": "F", "high": "T", "items": ["MB8","MB9","MB10","MB11"], "reverse_items": ["MB9","MB11"] },
    { "key": "JP", "low": "P", "high": "J", "items": ["MB12","MB13","MB14","MB15"], "reverse_items": ["MB13","MB15"] }
  ],
  "thresholds": {
    "midpoint": 4.0,
    "tie_low": 3.6,
    "tie_high": 4.4
  }
};
