import type { QuestionnaireData } from '../types';

export const questionnaireData: QuestionnaireData = {
  "metadata": {
    "title": "Tri-Stack (MBTI × PRISM × QuEST) — 45 Items",
    "version": "1.0.0",
    "description": "Single 45-item questionnaire: MBTI 15, PRISM 15, QuEST 15."
  },
  "scale": {
    "type": "likert_7",
    "labels": ["1=Strongly Disagree","2","3","4=Neutral","5","6","7=Strongly Agree"]
  },
  "items": [
    // ==== MBTI (15) ====
    { "id": "MB1",  "axis": "EI", "isReverseScored": false, "prompt": "I gain energy from being around groups of people.", "type": "likert" },
    { "id": "MB2",  "axis": "EI", "isReverseScored": true,  "prompt": "After social activities, I usually need alone time to recharge.", "type": "likert" },
    { "id": "MB3",  "axis": "EI", "isReverseScored": false, "prompt": "I naturally start conversations with new people.", "type": "likert" },
    { "id": "MB4",  "axis": "SN", "isReverseScored": false, "prompt": "I prefer concrete facts and details over abstract ideas.", "type": "likert" },
    { "id": "MB5",  "axis": "SN", "isReverseScored": true,  "prompt": "I often look for patterns and possibilities behind what I observe.", "type": "likert" },
    { "id": "MB6",  "axis": "SN", "isReverseScored": false, "prompt": "Step-by-step instructions help me learn best.", "type": "likert" },
    { "id": "MB7",  "axis": "SN", "isReverseScored": true,  "prompt": "Before acting, I like to imagine several future paths and choose among them.", "type": "likert" },
    { "id": "MB8",  "axis": "TF", "isReverseScored": false, "prompt": "I make decisions mainly by analyzing logic and evidence.", "type": "likert" },
    { "id": "MB9",  "axis": "TF", "isReverseScored": true,  "prompt": "I make decisions mainly by considering people’s values and feelings.", "type": "likert" },
    { "id": "MB10", "axis": "TF", "isReverseScored": false, "prompt": "I prefer blunt fairness to keeping harmony if I must choose.", "type": "likert" },
    { "id": "MB11", "axis": "TF", "isReverseScored": true,  "prompt": "I will adjust an efficient plan to preserve relationships when tension rises.", "type": "likert" },
    { "id": "MB12", "axis": "JP", "isReverseScored": false, "prompt": "I like firm plans, clear timelines, and defined milestones.", "type": "likert" },
    { "id": "MB13", "axis": "JP", "isReverseScored": true,  "prompt": "I prefer to keep options open and decide late.", "type": "likert" },
    { "id": "MB14", "axis": "JP", "isReverseScored": false, "prompt": "Unstructured days make me uneasy.", "type": "likert" },
    { "id": "MB15", "axis": "JP", "isReverseScored": true,  "prompt": "I often switch tasks as new ideas appear, even if the plan changes.", "type": "likert" },

    // ==== PRISM (15) ====
    { "id": "PR1",  "axis": "Social",   "isReverseScored": false, "prompt": "Parents should structure daily learning with clear goals.", "type": "likert" },
    { "id": "PR2",  "axis": "Social",   "isReverseScored": true,  "prompt": "Children learn best with autonomy supported by light scaffolds.", "type": "likert" },
    { "id": "PR3",  "axis": "Social",   "isReverseScored": false, "prompt": "Clear household or classroom routines improve outcomes.", "type": "likert" },
    { "id": "PR4",  "axis": "Social",   "isReverseScored": true,  "prompt": "Schools should emphasize creativity and self-direction over strict discipline.", "type": "likert" },
    { "id": "PR5",  "axis": "Cultural", "isReverseScored": false, "prompt": "I actively seek cultures and ideas that challenge my habits.", "type": "likert" },
    { "id": "PR6",  "axis": "Cultural", "isReverseScored": true,  "prompt": "Societies work best when traditions are preserved even if change is slower.", "type": "likert" },
    { "id": "PR7",  "axis": "Cultural", "isReverseScored": false, "prompt": "Immigration generally enriches a country’s culture and economy.", "type": "likert" },
    { "id": "PR8",  "axis": "Economic", "isReverseScored": false, "prompt": "Excess regulation often harms innovation more than it helps.", "type": "likert" },
    { "id": "PR9",  "axis": "Economic", "isReverseScored": false, "prompt": "People should be free to take financial risks without state interference.", "type": "likert" },
    { "id": "PR10", "axis": "Economic", "isReverseScored": true,  "prompt": "Strong safety nets like UBI are necessary to keep markets fair.", "type": "likert" },
    { "id": "PR11", "axis": "Economic", "isReverseScored": true,  "prompt": "Central banks should actively stabilize markets even if it dulls innovation.", "type": "likert" },
    { "id": "PR12", "axis": "Political","isReverseScored": false, "prompt": "Most decisions should be pushed to local levels rather than federal.", "type": "likert" },
    { "id": "PR13", "axis": "Political","isReverseScored": true,  "prompt": "National problems need strong centralized coordination.", "type": "likert" },
    { "id": "PR14", "axis": "Political","isReverseScored": false, "prompt": "States and cities should set their own climate policies even if they differ from national targets.", "type": "likert" },
    { "id": "PR15", "axis": "Political","isReverseScored": true,  "prompt": "Global institutions (e.g., UN, WHO, IMF) are necessary to tackle 21st-century problems.", "type": "likert" },

    // ==== QuEST (15) ====
    { "id": "QQ1",  "axis": "Q", "isReverseScored": false, "prompt": "I quickly spot patterns and underlying rules in complex problems.", "type": "likert" },
    { "id": "QQ2",  "axis": "Q", "isReverseScored": true,  "prompt": "I prefer to jump in and learn by doing rather than model the problem first.", "type": "likert" },
    { "id": "QQ3",  "axis": "Q", "isReverseScored": false, "prompt": "Before executing, I map the system so I know where the leverage is.", "type": "likert" },
    { "id": "QQ4",  "axis": "E", "isReverseScored": false, "prompt": "In tense meetings, I acknowledge concerns before proposing solutions.", "type": "likert" },
    { "id": "QQ5",  "axis": "E", "isReverseScored": true,  "prompt": "I push for the quickest decision even if some people feel unheard.", "type": "likert" },
    { "id": "QQ6",  "axis": "E", "isReverseScored": false, "prompt": "I tailor messages so different stakeholders understand the tradeoffs.", "type": "likert" },
    { "id": "QQ7",  "axis": "E", "isReverseScored": false, "prompt": "When conflict rises, I restate the shared goal to reduce defensiveness before choosing a path.", "type": "likert" },
    { "id": "QQ8",  "axis": "S", "isReverseScored": false, "prompt": "In the last 90 days, high-pressure moments did not rattle me; I stayed even.", "type": "likert" },
    { "id": "QQ9",  "axis": "S", "isReverseScored": true,  "prompt": "Under stress in the last 90 days, I’ve become irritable or lost focus.", "type": "likert" },
    { "id": "QQ10", "axis": "S", "isReverseScored": false, "prompt": "After setbacks in the last 90 days, I re-engaged quickly.", "type": "likert" },
    { "id": "QQ11", "axis": "S", "isReverseScored": true,  "prompt": "In the last 90 days, I delayed starting again for days after a setback.", "type": "likert" },
    { "id": "QQ12", "axis": "T", "isReverseScored": false, "prompt": "I finish difficult projects after the initial excitement fades.", "type": "likert" },
    { "id": "QQ13", "axis": "T", "isReverseScored": true,  "prompt": "When a better approach appears mid-project, I pivot immediately rather than finishing version one.", "type": "likert" },
    { "id": "QQ14", "axis": "T", "isReverseScored": false, "prompt": "I keep weekly routines that move long efforts forward.", "type": "likert" },
    { "id": "QQ15", "axis": "T", "isReverseScored": true,  "prompt": "I often start new projects before finishing the current one.", "type": "likert" }
  ]
};
