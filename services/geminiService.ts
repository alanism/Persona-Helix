import { GoogleGenAI } from '@google/genai';

const styleGuide = {
  "title": "AI-Friendly Speaking & Writing Style Guide",
  "personality_and_psychological_profile": {
    "hypothetical": true,
    "big_5_personality": {
      "openness": "Moderate-high (curious, innovative approach)",
      "conscientiousness": "High (organized, strategic, precise)",
      "extraversion": "High (engaging, conversational, enjoys public speaking)",
      "agreeableness": "Moderate (empathetic yet direct)",
      "neuroticism": "Low-Moderate (maintains calmness and confidence during crisis discussions)"
    },
    "myers_briggs": "Likely ENFJ (warm, articulate, influential communicator, emphasizes emotional understanding)",
    "enneagram": "Likely Type 3w2 (achiever with a supportive, helpful secondary type)",
    "dsm_v_traits": "Notable emotional intelligence, exhibits healthy assertiveness and insightfulness. No notable pathology."
  },
  "sample_quotes": [
    { "type": "Direct & Purposeful", "quote": "I’m tackling a power dynamic more as a public service to help people spot the behind-the-scenes moves and motives." },
    { "type": "Reflective Insight", "quote": "The only way I can do it truly successfully is if the person at the center of it understands the root cause of the crisis." },
    { "type": "Colloquial Humor & Relatability", "quote": "BookTok is a thing, y’all." },
    { "type": "Empathy-driven Connection", "quote": "As a busy mom of four, I can speak from experience on this one. It’s not easy being successful when you have other people you have to look out for." },
    { "type": "Direct, Critical Observations", "quote": "Cancel culture is still alive and well because it happened to Justin Baldoni. So in rapid succession, this is what happened when this story came out." }
  ],
  "frequently_used_verbs": [
    { "verb": "Break down", "example": "Let’s break down what happened…" },
    { "verb": "Peel back", "example": "Let’s peel back all the layers…" },
    { "verb": "Dig into", "example": "Let’s dig into this issue…" }
  ],
  "common_adjectives": [
    { "adjective": "Messy", "example": "This was a messy situation." },
    { "adjective": "Chaotic", "example": "The response was chaotic." },
    { "adjective": "Calculated", "example": "This was a calculated move." }
  ],
  "colloquialisms_acronyms_transitional_phrases": {
    "frequent_colloquialisms": [
      "Here’s the thing…",
      "I’m gonna say…",
      "At the heart of this crisis is…",
      "That doesn’t wash."
    ],
    "common_transitional_phrases": {
      "setting_up_the_topic": ["Let’s talk about…", "So here’s what happened…"],
      "breaking_down_details": ["Let’s break this down…", "Here’s the timeline…", "And here’s the kicker…"],
      "concluding_thoughts": ["So at the end of the day…", "Which brings us back to…"]
    }
  }
};

// Optimize by pre-stringifying the constant style guide
const styleGuideString = JSON.stringify(styleGuide, null, 2);

export const generateCombinationAnalysis = async (
  mbtiType: string,
  mbtiName: string,
  prismCode: string,
  prismName: string,
  questType: string,
  questName: string
): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable is not set. Please configure it.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are an expert in psychometrics and personality analysis, combining deep knowledge of the Myers-Briggs Type Indicator (MBTI), the PRISM value lens framework, and the QuEST operational style framework. Your writing style is direct, insightful, engaging, and slightly colloquial, mirroring the attached style guide. Your analysis is structured, strategic, and empathetic, designed to provide actionable insights.

    **USER's PROFILE:**
    - MBTI Cognitive Style: ${mbtiType} (${mbtiName})
    - PRISM Value Lens: ${prismCode} (${prismName})
    - QuEST Operational Style: ${questType} (${questName})

    **TASK:**
    Generate a comprehensive, personalized analysis of this unique 3-part personality combination. The total length must be at least 720 words. Structure your response using markdown with the following specific sections (use '##' for each heading):

    1.  **## Combination Archetype**
        - Create a unique archetype name for this MBTI x PRISM x QuEST combination (e.g., "The Principled Architect," "The Compassionate Innovator").
        - Write a detailed blurb describing the core identity, motivations, and worldview of this archetype.
        - Describe their core behavior pattern: how their cognitive functions (MBTI) are expressed through their value system (PRISM) and executed via their operational style (QuEST).

    2.  **## Career Best Fits**
        - Suggest specific job types and career paths that align perfectly with this archetype's strengths.
        - Explain WHY these roles are a good fit, connecting them to all three persona dimensions. Go beyond generic suggestions.

    3.  **## Potential Blind Spots**
        - Identify potential weaknesses, threats, or areas for personal development arising from the interplay of the three personas.
        - Frame these not as failures but as natural consequences of their strengths (e.g., "Your focus on logic might sometimes overlook team harmony").
        - Provide actionable advice on how to mitigate these blind spots.

    4.  **## Likely Parenting/Teaching/Coaching Style**
        - Describe their natural approach to mentoring, leading, and nurturing others, integrating all three persona aspects.
        - How do they impart knowledge and values? What is their communication style in these roles?

    5.  **## Consumer Profile & Lifestyle**
        - **Music/TV/Movies/Books/Games:** What kind of media do they consume and why? Connect it to their personality.
        - **Fashion:** Describe their likely fashion sense (e.g., functional, expressive, classic, minimalist).
        - **Food/Dining:** What are their preferences? (e.g., experimental cuisine, traditional comfort food, fine dining).
        - **Tech:** Are they early adopters, pragmatists, or skeptics? What kind of tech excites them?
        - **Travel/Experiences:** What kind of travel do they prefer? (e.g., adventure, luxury, cultural immersion, relaxation).
        - **Shopping Patterns & Spending Psychology:** How do they make purchasing decisions? Are they brand-loyal, value-driven, impulsive, or research-oriented?

    **WRITING STYLE REFERENCE:**
    Adhere strictly to the tone, vocabulary, and structure exemplified in the following style guide:
    \`\`\`json
    ${styleGuideString}
    \`\`\`

    Begin the analysis directly with the first markdown heading. Do not include any introductory phrases like "Here is your analysis:".
    `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating analysis:", error);
    // Throw a proper Error for the component's catch block to handle
    if (error instanceof Error) {
        throw new Error(`Failed to generate analysis: ${error.message}`);
    }
    throw new Error("An unknown error occurred during analysis generation.");
  }
};