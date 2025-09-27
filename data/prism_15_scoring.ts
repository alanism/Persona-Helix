import type { ScoringData } from '../types';

export const prism15Scoring: ScoringData = {
  "metadata": {
    "title": "PRISM – 15 Items Scoring",
    "version": "1.0.0",
    "description": "Scoring rules for PRISM 15-item set (Social, Cultural, Economic, Political)."
  },
  "axes": [
    { "key": "S", "name": "Social",   "low": "F", "high": "B", "items": ["PR1","PR2","PR3","PR4"], "reverse_items": ["PR2","PR4"] },
    { "key": "C", "name": "Cultural", "low": "T", "high": "X", "items": ["PR5","PR6","PR7"],       "reverse_items": ["PR6"] },
    { "key": "E", "name": "Economic", "low": "N", "high": "M", "items": ["PR8","PR9","PR10","PR11"], "reverse_items": ["PR10","PR11"] },
    { "key": "P", "name": "Political","low": "C", "high": "L", "items": ["PR12","PR13","PR14","PR15"], "reverse_items": ["PR13","PR15"] }
  ],
  "thresholds": {
    "midpoint": 4.0,
    "tie_low": 3.6,
    "tie_high": 4.4
  }
};
