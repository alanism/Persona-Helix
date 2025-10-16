import type { QuestionnaireData } from '../types';

export const questionnaireData: QuestionnaireData = {
  "metadata": {
    "title": "Tri-Stack (MBTI × PRISM × QuEST) — 126 Items",
    "version": "2.0.0",
    "description": "Single 126-item questionnaire: MBTI 42, PRISM 42, QuEST 42. Each includes 15 core items and 27 predictor-only items."
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
    { "id": "QQ15", "axis": "T", "isReverseScored": true,  "prompt": "I often start new projects before finishing the current one.", "type": "likert" },

    // ==== MBTI (MB16–MB42) ====
    // Income Inequality
    { id: "MB16", axis: "TF", predictorsOnly: true, isReverseScored: false, prompt: "When I see big wealth gaps, I focus on analyzing causes before reacting emotionally.", type: "likert" },
    { id: "MB17", axis: "SN", predictorsOnly: true, isReverseScored: true,  prompt: "I focus only on today’s inequality numbers rather than long-term patterns.", type: "likert" },
    { id: "MB18", axis: "EI", predictorsOnly: true, isReverseScored: false, prompt: "I prefer discussing inequality openly with others instead of reflecting on it privately.", type: "likert" },

    // AI
    { id: "MB19", axis: "TF", predictorsOnly: true, isReverseScored: false, prompt: "I trust AI more when it presents clear logic rather than emotional framing.", type: "likert" },
    { id: "MB20", axis: "SN", predictorsOnly: true, isReverseScored: false, prompt: "I’m quick to imagine AI’s future possibilities rather than focus on present limits.", type: "likert" },
    { id: "MB21", axis: "JP", predictorsOnly: true, isReverseScored: true,  prompt: "I prefer AI assistants that keep options open rather than give firm recommendations.", type: "likert" },

    // Geopolitics
    { id: "MB22", axis: "EI", predictorsOnly: true, isReverseScored: false, prompt: "I prefer discussing global issues with diverse groups rather than reflecting alone.", type: "likert" },
    { id: "MB23", axis: "TF", predictorsOnly: true, isReverseScored: false, prompt: "I analyze international conflicts by weighing facts before emotions.", type: "likert" },
    { id: "MB24", axis: "JP", predictorsOnly: true, isReverseScored: false, prompt: "I’d rather see clear treaties and rules than flexible, evolving agreements.", type: "likert" },

    // Age Generations
    { id: "MB25", axis: "SN", predictorsOnly: true, isReverseScored: true,  prompt: "I connect better with younger trends than with older traditions.", type: "likert" },
    { id: "MB26", axis: "EI", predictorsOnly: true, isReverseScored: false, prompt: "I enjoy bridging conversations between different age groups.", type: "likert" },
    { id: "MB27", axis: "TF", predictorsOnly: true, isReverseScored: true,  prompt: "I make generational decisions mainly by preserving harmony rather than blunt fairness.", type: "likert" },

    // Social Networks
    { id: "MB28", axis: "EI", predictorsOnly: true, isReverseScored: false, prompt: "I feel energized sharing my thoughts on social platforms.", type: "likert" },
    { id: "MB29", axis: "SN", predictorsOnly: true, isReverseScored: false, prompt: "I prefer concrete posts (photos, updates) over abstract discussions online.", type: "likert" },
    { id: "MB30", axis: "JP", predictorsOnly: true, isReverseScored: false, prompt: "I keep a clear posting schedule or routine on social media.", type: "likert" },

    // UAP/UFO
    { id: "MB31", axis: "TF", predictorsOnly: true, isReverseScored: false, prompt: "I evaluate UAP claims based on logical evidence first.", type: "likert" },
    { id: "MB32", axis: "SN", predictorsOnly: true, isReverseScored: false, prompt: "I enjoy imagining possibilities behind unexplained aerial phenomena.", type: "likert" },
    { id: "MB33", axis: "EI", predictorsOnly: true, isReverseScored: false, prompt: "I prefer discussing UAP sightings with others rather than keeping thoughts private.", type: "likert" },

    // Genetics
    { id: "MB34", axis: "SN", predictorsOnly: true, isReverseScored: false, prompt: "I enjoy considering how genetic research shapes future possibilities.", type: "likert" },
    { id: "MB35", axis: "TF", predictorsOnly: true, isReverseScored: false, prompt: "I rely on logic when discussing genetic science, not fears.", type: "likert" },
    { id: "MB36", axis: "EI", predictorsOnly: true, isReverseScored: true,  prompt: "I prefer exploring genetic breakthroughs on my own rather than with others.", type: "likert" },

    // Environmental
    { id: "MB37", axis: "JP", predictorsOnly: true, isReverseScored: false, prompt: "I like firm environmental rules rather than flexible guidelines.", type: "likert" },
    { id: "MB38", axis: "SN", predictorsOnly: true, isReverseScored: false, prompt: "I focus on long-term climate patterns rather than short-term changes.", type: "likert" },
    { id: "MB39", axis: "EI", predictorsOnly: true, isReverseScored: false, prompt: "I feel energized joining group efforts to protect the environment.", type: "likert" },

    // Investing
    { id: "MB40", axis: "TF", predictorsOnly: true, isReverseScored: false, prompt: "I base my investing decisions on data and logic more than intuition.", type: "likert" },
    { id: "MB41", axis: "SN", predictorsOnly: true, isReverseScored: true,  prompt: "I focus only on current numbers rather than imagining big-picture market trends.", type: "likert" },
    { id: "MB42", axis: "EI", predictorsOnly: true, isReverseScored: false, prompt: "I prefer discussing investments with others rather than researching alone.", type: "likert" },

    // ==== PRISM (PR16–PR42) ====
    // Income Inequality
    { id: "PR16", axis: "Economic", predictorsOnly: true, isReverseScored: false, prompt: "Rising inequality threatens the stability of free markets.", type: "likert" },
    { id: "PR17", axis: "Social",   predictorsOnly: true, isReverseScored: false, prompt: "Large wealth gaps strain trust and social bonds.", type: "likert" },
    { id: "PR18", axis: "Cultural", predictorsOnly: true, isReverseScored: false, prompt: "Societies should address inequality even if it disrupts traditions.", type: "likert" },

    // AI
    { id: "PR19", axis: "Political",predictorsOnly: true, isReverseScored: false, prompt: "AI policy should be decided globally, not just nationally.", type: "likert" },
    { id: "PR20", axis: "Economic", predictorsOnly: true, isReverseScored: false, prompt: "AI will widen inequality unless paired with safety nets.", type: "likert" },
    { id: "PR21", axis: "Cultural", predictorsOnly: true, isReverseScored: false, prompt: "AI art enhances human creativity rather than replaces it.", type: "likert" },

    // Geopolitics
    { id: "PR22", axis: "Political",predictorsOnly: true, isReverseScored: true,  prompt: "Local governments should align with global power blocs.", type: "likert" },
    { id: "PR23", axis: "Economic", predictorsOnly: true, isReverseScored: false, prompt: "Global trade strengthens peace more than nationalism does.", type: "likert" },
    { id: "PR24", axis: "Cultural", predictorsOnly: true, isReverseScored: true,  prompt: "Cultural identity strengthens when geopolitical alliances dominate.", type: "likert" },

    // Age Generations
    { id: "PR25", axis: "Social",   predictorsOnly: true, isReverseScored: false, prompt: "Generational divides in politics make collective solutions harder.", type: "likert" },
    { id: "PR26", axis: "Cultural", predictorsOnly: true, isReverseScored: false, prompt: "Older traditions balance younger innovation in healthy societies.", type: "likert" },
    { id: "PR27", axis: "Economic", predictorsOnly: true, isReverseScored: false, prompt: "Wealth transfers between generations shape economic fairness.", type: "likert" },

    // Social Networks
    { id: "PR28", axis: "Political",predictorsOnly: true, isReverseScored: false, prompt: "Social media corporations act like political powers.", type: "likert" },
    { id: "PR29", axis: "Cultural", predictorsOnly: true, isReverseScored: false, prompt: "Memes and online trends drive culture more than institutions now.", type: "likert" },
    { id: "PR30", axis: "Social",   predictorsOnly: true, isReverseScored: true,  prompt: "Social platforms weaken community more than strengthen it.", type: "likert" },

    // UAP/UFO
    { id: "PR31", axis: "Political",predictorsOnly: true, isReverseScored: false, prompt: "Governments likely know more about UAPs than they publicly admit.", type: "likert" },
    { id: "PR32", axis: "Cultural", predictorsOnly: true, isReverseScored: false, prompt: "UAP stories influence culture more than official science does.", type: "likert" },
    { id: "PR33", axis: "Economic", predictorsOnly: true, isReverseScored: false, prompt: "If UAP tech were real, it could reshape global markets.", type: "likert" },

    // Genetics
    { id: "PR34", axis: "Cultural", predictorsOnly: true, isReverseScored: false, prompt: "Genetic research challenges traditional cultural ideas.", type: "likert" },
    { id: "PR35", axis: "Social",   predictorsOnly: true, isReverseScored: false, prompt: "Genetic information should be shared equally across society.", type: "likert" },
    { id: "PR36", axis: "Political",predictorsOnly: true, isReverseScored: false, prompt: "Governments should regulate genetic technology tightly.", type: "likert" },

    // Environmental
    { id: "PR37", axis: "Political",predictorsOnly: true, isReverseScored: false, prompt: "Environmental policy should outweigh short-term economic growth.", type: "likert" },
    { id: "PR38", axis: "Cultural", predictorsOnly: true, isReverseScored: false, prompt: "Cultures adapt and evolve with environmental pressures.", type: "likert" },
    { id: "PR39", axis: "Economic", predictorsOnly: true, isReverseScored: false, prompt: "Green energy investment is essential for future markets.", type: "likert" },

    // Investing
    { id: "PR40", axis: "Economic", predictorsOnly: true, isReverseScored: false, prompt: "Financial markets are fair only if all investors have equal access.", type: "likert" },
    { id: "PR41", axis: "Social",   predictorsOnly: true, isReverseScored: false, prompt: "Investment decisions affect community wellbeing, not just individuals.", type: "likert" },
    { id: "PR42", axis: "Cultural", predictorsOnly: true, isReverseScored: true,  prompt: "Cultural attitudes do not shape how people invest their money.", type: "likert" },

    // ==== QuEST (QQ16–QQ42) ====
    // Income Inequality
    { id: "QQ16", axis: "Q", predictorsOnly: true, isReverseScored: false, prompt: "I analyze inequality by mapping system dynamics rather than focusing only on individuals.", type: "likert" },
    { id: "QQ17", axis: "E", predictorsOnly: true, isReverseScored: false, prompt: "I explain inequality in ways that make sense to different groups.", type: "likert" },
    { id: "QQ18", axis: "T", predictorsOnly: true, isReverseScored: false, prompt: "I stay committed to long projects aimed at reducing inequality.", type: "likert" },

    // AI
    { id: "QQ19", axis: "Q", predictorsOnly: true, isReverseScored: false, prompt: "I evaluate AI outputs by modeling their strengths and blind spots.", type: "likert" },
    { id: "QQ20", axis: "E", predictorsOnly: true, isReverseScored: false, prompt: "When AI gives advice, I check how people will interpret and react.", type: "likert" },
    { id: "QQ21", axis: "S", predictorsOnly: true, isReverseScored: false, prompt: "I stay calm even when AI systems surprise or fail unpredictably.", type: "likert" },

    // Geopolitics
    { id: "QQ22", axis: "T", predictorsOnly: true, isReverseScored: false, prompt: "I persist in following global events to completion, not just headlines.", type: "likert" },
    { id: "QQ23", axis: "E", predictorsOnly: true, isReverseScored: false, prompt: "I restate shared international goals before analyzing conflicts.", type: "likert" },
    { id: "QQ24", axis: "Q", predictorsOnly: true, isReverseScored: false, prompt: "I model geopolitical systems to see leverage points.", type: "likert" },

    // Age Generations
    { id: "QQ25", axis: "S", predictorsOnly: true, isReverseScored: false, prompt: "I adapt quickly to working with younger or older colleagues.", type: "likert" },
    { id: "QQ26", axis: "E", predictorsOnly: true, isReverseScored: false, prompt: "I adjust my communication style to match different generations.", type: "likert" },
    { id: "QQ27", axis: "T", predictorsOnly: true, isReverseScored: false, prompt: "I finish long projects even when generational trends shift focus.", type: "likert" },

    // Social Networks
    { id: "QQ28", axis: "E", predictorsOnly: true, isReverseScored: false, prompt: "I moderate online conflict by reminding groups of shared goals.", type: "likert" },
    { id: "QQ29", axis: "Q", predictorsOnly: true, isReverseScored: false, prompt: "I notice hidden patterns in how information spreads online.", type: "likert" },
    { id: "QQ30", axis: "S", predictorsOnly: true, isReverseScored: false, prompt: "I stay steady even when online debates get heated.", type: "likert" },

    // UAP/UFO
    { id: "QQ31", axis: "Q", predictorsOnly: true, isReverseScored: false, prompt: "I test unusual UAP theories by checking their internal consistency.", type: "likert" },
    { id: "QQ32", axis: "S", predictorsOnly: true, isReverseScored: false, prompt: "I remain calm when exposed to surprising UAP ideas.", type: "likert" },
    { id: "QQ33", axis: "E", predictorsOnly: true, isReverseScored: false, prompt: "I translate complex UAP reports into everyday language for others.", type: "likert" },

    // Genetics
    { id: "QQ34", axis: "Q", predictorsOnly: true, isReverseScored: false, prompt: "I model genetic influences logically rather than assuming simple cause and effect.", type: "likert" },
    { id: "QQ35", axis: "E", predictorsOnly: true, isReverseScored: false, prompt: "I adjust explanations of genetics depending on my audience.", type: "likert" },
    { id: "QQ36", axis: "T", predictorsOnly: true, isReverseScored: false, prompt: "I stick with long-term genetic projects despite setbacks.", type: "likert" },

    // Environmental
    { id: "QQ37", axis: "S", predictorsOnly: true, isReverseScored: false, prompt: "I remain steady even when environmental crises escalate.", type: "likert" },
    { id: "QQ38", axis: "Q", predictorsOnly: true, isReverseScored: true,  prompt: "I focus on a single environmental factor rather than modeling interactions.", type: "likert" },
    { id: "QQ39", axis: "E", predictorsOnly: true, isReverseScored: false, prompt: "I reframe environmental issues to motivate cooperation.", type: "likert" },

    // Investing
    { id: "QQ40", axis: "T", predictorsOnly: true, isReverseScored: false, prompt: "I persist with long-term investing strategies even during downturns.", type: "likert" },
    { id: "QQ41", axis: "Q", predictorsOnly: true, isReverseScored: false, prompt: "I analyze investment systems as interconnected models.", type: "likert" },
    { id: "QQ42", axis: "E", predictorsOnly: true, isReverseScored: true,  prompt: "I describe financial risk in ways that often confuse others.", type: "likert" }
  ]
};