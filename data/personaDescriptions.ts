// personaDescriptions.ts

export type Persona = { name: string; blurb: string; summary?: string };
export type PersonaMap = Record<string, Persona>;
export type ToolKey = 'MBTI' | 'PRISM' | 'QuEST';

//
// MBTI — 16 types
//
export const mbtiDescriptions: PersonaMap = {
  ENTP: {
    name: "The Visionary",
    blurb: "You spot opportunities where others see noise. Quick with ideas, faster with words. You thrive in chaos. Debate excites you. Rules feel like suggestions. You love testing, tweaking, hacking. Starting is easy, finishing is harder. You’re magnetic—people lean in when you talk. You get bored fast, so you chase what’s new. Mistakes? Part of the game. You’d rather fail big than fade quietly. Business, art, startups—it’s all playgrounds to you. Structure helps but never cages. You need freedom, and people who can keep up. When you’re on, the energy lifts the room. Your gift is sparking momentum others ride forward. Your challenge? Stick long enough to see ideas grow roots and scale.",
    summary: "As a Visionary, you're an innovative debater who thrives on intellectual challenges. You excel at spotting opportunities and generating ideas, often questioning the status quo to find better ways of doing things. While your quick-witted nature makes you a magnetic leader, you may struggle with follow-through as your curiosity pulls you toward the next novel concept. You value freedom and flexibility, preferring dynamic environments where you can test and innovate without rigid constraints. Your greatest gift is sparking momentum that others can build upon."
  },
  ENTJ: {
    name: "The Commander",
    blurb: "You see the board, not the pieces. Strategy runs in your blood. While others argue, you set direction. Goals aren’t optional, they’re targets to hit. You thrive under pressure—deadlines sharpen you. You don’t just work hard, you make others work smarter. Leadership isn’t a hat you wear; it’s who you are. Direct, decisive, relentless. Weak excuses irritate you. Efficiency excites you. You like clarity, order, winning. People may call you blunt. Truth is, you care about results more than feelings. You’re not cold—you’re focused. When you lock onto a vision, you drive until it’s real. Your power? Turning chaos into systems, ambition into execution, and plans into progress.",
    summary: "As the Commander, you are a natural-born leader driven by logic and a desire for efficiency. You excel at creating long-term strategies and organizing people to achieve ambitious goals. Decisive and confident, you are not afraid to take charge and make tough calls. While your direct, results-oriented approach is highly effective, it can sometimes overlook emotional nuances. You thrive in structured environments where you can build systems, drive progress, and turn bold visions into tangible realities. Your greatest strength is your ability to command a situation and execute a plan with unwavering focus and determination."
  },
  ENFP: {
    name: "The Campaigner",
    blurb: "You’re powered by curiosity. Ideas, people, places—you want them all. You connect dots others don’t even see. Enthusiasm is your currency. Friends joke you run on rocket fuel. You believe deeply in possibilities. Rules? Only if they make sense. You care about meaning, not routine. You inspire by being yourself—open, authentic, alive. You hate monotony. Adventure keeps you sharp. You start fast, you dream big, you bring energy to teams. But finishing? That’s the wrestle. Your gift is people—you spot potential instantly and pull it out of them. You don’t just build projects, you build movements. Your story isn’t linear—it’s full of twists, connections, sparks. You live in the question, not just the answer.",
    summary: "As the Campaigner, you are a true free spirit fueled by boundless enthusiasm and a deep curiosity for people and ideas. You excel at connecting disparate concepts and inspiring others with your infectious energy and optimistic vision. Your creativity and passion drive you to explore countless possibilities, though you may find it challenging to focus on a single path. You value authenticity and meaningful connections above all else, making you a natural champion for causes you believe in. Your gift lies in your ability to spark movements and empower others to see the potential in themselves and the world."
  },
  ENFJ: {
    name: "The Mentor",
    blurb: "You read people like books. Emotions aren’t noise—they’re data. You make others feel seen. Leadership comes naturally because you connect first, direct second. You’re passionate about growth—yours and theirs. You dream big, but you also guide others to dream too. You believe in potential, and you won’t shut up until others see it. You thrive in groups, build bridges fast, and hate seeing people left out. Your energy is contagious. People look to you when they need direction wrapped in encouragement. You sometimes carry too much—others’ struggles become your weight. But your gift is vision plus empathy. You don’t just lead with plans—you lead with heart. People don’t forget how you made them feel.",
    summary: "As the Mentor, you are a charismatic and empathetic leader who naturally inspires and guides others toward their potential. You possess a unique ability to understand people's motivations and needs, making you a powerful force for positive change. Driven by a strong sense of purpose, you create harmony and encourage collaboration. While your passion for helping is a great strength, you may sometimes absorb the struggles of others as your own. Your gift is combining visionary leadership with genuine care, leaving a lasting impact on everyone you connect with by leading not just with plans, but with heart."
  },
  ESTP: {
    name: "The Dynamo",
    blurb: "You live in the moment. Action is your language. You’d rather do than discuss. Risks don’t scare you—they thrill you. You’re sharp, observant, quick to adapt. In business or sport, you read the play and move. Waiting feels like wasting. You’re competitive, energetic, magnetic. Friends know you as the one who brings the spark. Challenges pump you up. Plans? Fine, as long as they don’t cage you. You thrive when the pressure’s real, the stakes are high, and speed matters. You’re practical—less theory, more action. You’re great in crises because you don’t freeze. But long-term patience? That’s your test. Your edge is instinct and boldness. You win by moving while others hesitate.",
    summary: "As the Dynamo, you are an energetic and adaptable powerhouse who lives in the present moment. Action is your default setting; you thrive on solving problems as they arise and aren't afraid to take calculated risks. With a sharp eye for detail and a bold, pragmatic approach, you excel in fast-paced, high-stakes environments. You prefer hands-on experience over theoretical debates and are a master of improvisation. Your magnetic and competitive nature makes you a natural performer in any field. While long-term planning may test your patience, your ability to act decisively under pressure is your ultimate advantage."
  },
  ESTJ: {
    name: "The Executive",
    blurb: "You build order from noise. Systems, rules, routines—they’re not limits, they’re levers. You’re practical, structured, direct. People know where they stand with you. You value tradition, responsibility, and clear roles. At work, you set goals, enforce deadlines, and make sure the job gets done. You don’t chase hype; you trust proven methods. Leadership feels natural because you like results visible and measurable. You may seem strict, but it’s because you want things done right. You thrive in organizations where standards matter. Efficiency, duty, progress—those are your drivers. You don’t just follow systems, you create them. Your gift is execution. Your challenge is flexibility. You bring stability when the world spins too fast.",
    summary: "As the Executive, you are a pillar of order and a master of execution. You excel at creating and upholding systems, using your practical, logical approach to ensure that tasks are completed efficiently and to a high standard. People value your directness and reliability, as you bring structure and clarity to every situation. A natural leader, you thrive on responsibility and are committed to maintaining traditions and processes that have proven their worth. While you may need to consciously work on flexibility, your unparalleled ability to manage people and resources makes you essential for turning plans into concrete achievements."
  },
  ESFP: {
    name: "The Entertainer",
    blurb: "You light up rooms. Fun follows you. You’re present, alive, in the moment. People matter most—laughing, connecting, sharing experiences. You hate boredom. You’re spontaneous, expressive, warm. You notice beauty, sounds, flavors—life’s details excite you. You’re practical but playful. You prefer action over theory, people over paperwork. You love entertaining, encouraging, making memories. Sometimes you chase too many thrills, but you bring joy others need. You adapt quickly, thrive in social settings, and aren’t afraid to try new things. You care about harmony and making people feel good. Your gift is presence—you remind people life’s not just goals and grind. It’s dancing, laughing, and soaking up the now.",
    summary: "As the Entertainer, you are spontaneous, energetic, and the life of the party. You have a magnetic presence and a gift for making others feel included and joyful. Living entirely in the here and now, you engage the world through your senses, finding excitement in new experiences, aesthetics, and social connections. You are adaptable and resourceful, with a playful yet practical approach to life. While you may avoid conflict and long-term planning, your ability to create a fun and harmonious environment is invaluable. Your greatest strength is your vibrant presence, which reminds everyone to appreciate and enjoy the current moment."
  },
  ESFJ: {
    name: "The Caregiver",
    blurb: "You put people first. Service isn’t a chore—it’s your instinct. You notice needs before they’re voiced. Family, friends, community—they’re your core. You’re practical, organized, supportive. You believe in tradition and keeping harmony. You like clear roles and routines that make life smoother. You often take on responsibility because you can’t stand seeing things fall apart. You’re loyal, dependable, approachable. People feel safe with you. Your challenge? Not losing yourself while helping others. You thrive in groups, build community, and love being needed. You don’t chase spotlight, but you glow when others do well. Your gift is care with structure—you keep people connected, supported, and moving forward together.",
    summary: "As the Caregiver, you are a deeply conscientious and supportive individual, dedicated to maintaining harmony and caring for others. You have a remarkable talent for anticipating people's needs and creating a sense of belonging and stability. Organized and practical, you uphold traditions and ensure that your community runs smoothly. Your loyalty and commitment make you a trusted friend and leader. While you may sometimes prioritize others' needs over your own, your ability to provide structured, heartfelt support is your greatest gift. You are the glue that holds families, teams, and communities together with your unwavering dedication and care."
  },
  INTP: {
    name: "The Thinker",
    blurb: "You live in ideas. Logic is your playground. You question everything—rules, systems, even yourself. You like patterns, puzzles, theories. You can get lost in thought for hours. Social noise drains you, but deep debates excite you. You’re skeptical but curious. You thrive when you’re free to analyze, create, and connect abstract dots. People might see you as detached, but your mind is constantly buzzing. You dislike busywork and small talk. You’d rather explore how things work. You’re inventive, precise, independent. You’re not here to follow trends—you’re here to crack codes. Your gift is insight—you spot flaws and new ideas others miss. Your challenge? Action. Bringing thoughts into the world takes effort.",
    summary: "As the Thinker, you are a master of logic and abstract systems, driven by an insatiable curiosity to understand how everything works. Your mind is a playground of ideas, where you enjoy deconstructing complex theories and spotting patterns others miss. You are independent and analytical, preferring to solve problems with innovative, unconventional solutions. While you may seem reserved, you come alive in deep, intellectual discussions. Your greatest challenge is translating your brilliant insights into real-world action. Your gift is your profound ability to see the underlying structure of the universe, making you a natural pioneer of new ideas and theories."
  },
  INTJ: {
    name: "The Mastermind",
    blurb: "You see the long game. Strategy is your lens. You map future moves while others focus on today. Vision drives you. You trust logic, patterns, and systems. You work independently, set high standards, and expect the same. Small talk drains you. Big ideas fuel you. You’re decisive and determined. You dislike inefficiency and sloppy thinking. You’d rather be respected than liked. Planning isn’t boring to you—it’s thrilling. You thrive when solving complex problems and building structures that last. People may call you intense, but it’s because you see what others don’t. Your gift? Turning vision into reality. You’re the architect of futures. You play chess while others play checkers.",
    summary: "As the Mastermind, you are a strategic and visionary thinker who is always several steps ahead. You excel at analyzing complex systems, identifying patterns, and developing long-range plans to achieve your goals. Independent and decisive, you have high standards for yourself and others, driven by a relentless pursuit of competence and efficiency. You prefer to focus on a single, compelling vision and will work tirelessly to bring it to fruition. While you may seem reserved or intense, your mind is always working to architect a better future. Your greatest gift is your ability to turn intricate, ambitious ideas into reality."
  },
  INFP: {
    name: "The Idealist",
    blurb: "You lead with values. Authenticity matters more than approval. You dream big about people, purpose, and meaning. You’re sensitive, empathetic, creative. You write stories, paint visions, champion causes. You hate fake. You care deeply, sometimes too much. You’re reserved, but your inner world is rich. You may seem quiet, but your convictions are loud. You thrive when your work aligns with your beliefs. You dislike rigid systems that crush individuality. Your challenge is translating ideals into action. But your strength is powerful: you inspire by example. You remind people that hope and heart can change things. Your gift is vision with compassion—you keep humanity human in a world chasing speed.",
    summary: "As the Idealist, you are a creative and empathetic soul, guided by a powerful inner compass of values and a desire for authenticity. You see the world in terms of meaning and possibilities, often championing causes that advocate for a better future. Your rich inner world fuels your imagination, making you a natural storyteller and artist. While you may appear reserved, your convictions are deeply held and unwavering. You thrive in environments that allow for self-expression and are aligned with your personal mission. Your greatest gift is your ability to inspire hope and keep humanity's heart alive through your unwavering idealism."
  },
  INFJ: {
    name: "The Guide",
    blurb: "You sense depth others miss. People, systems, trends—you read beneath the surface. You’re driven by meaning and purpose. You connect the dots between present and future. You care deeply, but you’re strategic too. You’re idealistic but also disciplined. You help people grow, not just feel better. You dislike shallow talk and surface goals. You’d rather build legacies than chase likes. You thrive in quiet focus but can step up to lead when vision calls. People find you wise, even mysterious. Your challenge? Not carrying the world on your shoulders. Your gift is foresight plus empathy. You guide by showing not just what is, but what could be. You’re the compass in fog.",
    summary: "As the Guide, you possess a rare blend of idealism and strategic thinking, driven by a deep sense of purpose. Your powerful intuition allows you to see underlying patterns and future possibilities that others often miss. You are insightful and empathetic, dedicated to helping people and systems grow toward their full potential. Though you are compassionate, you are also decisive and organized in pursuit of your vision. You thrive when working toward a meaningful cause and are not afraid to lead when necessary. Your greatest gift is your ability to serve as a compass for others, guiding them toward a better future."
  },
  ISTP: {
    name: "The Craftsman",
    blurb: "You like tools, not theories. You trust your hands, your eyes, your instincts. You tinker, build, fix. You’re calm under pressure, fast in crisis. You’re independent, private, practical. You don’t love rules—you love results. You’re curious, but action-first. You thrive when solving problems in real time. Adventure calls you—sports, mechanics, design. You’d rather experiment than debate. You don’t waste words. You value competence over titles. People may call you quiet, but they respect your skill. Your gift is adaptability—figuring things out as you go. You’re not about dreams on paper; you’re about results in hand. Your challenge is patience for theory. But when things break, everyone looks to you.",
    summary: "As the Craftsman, you are a master of tools and a pragmatic, hands-on problem-solver. You thrive on understanding how things work, and you learn best by doing, not by reading manuals. Independent and adaptable, you excel in crisis situations, using your keen observational skills to find immediate, practical solutions. You are curious and adventurous, often exploring your interests through action-oriented hobbies. While you may be a person of few words, your technical skill and competence speak for themselves. Your greatest gift is your ability to troubleshoot and fix any problem with calm, focused expertise."
  },
  ISTJ: {
    name: "The Inspector",
    blurb: "You believe in order. Structure gives life clarity. Rules aren’t cages, they’re guides. You’re dependable, methodical, grounded. You keep commitments. You value tradition, facts, and responsibility. You thrive on routine and dislike chaos. At work, you set processes, track details, and finish what you start. People trust you because you deliver. You don’t chase trends—you stick to what works. You’re cautious with risk, but steady in storms. You may seem serious, but it’s because you care. Your gift is reliability—you make systems solid, families stable, and teams effective. You may not be flashy, but you’re foundational. Your challenge is flexibility. The world changes fast—you adapt best when you allow some flow.",
    summary: "As the Inspector, you are the bedrock of any organization or family, valued for your unwavering reliability and commitment to duty. You believe in structure, facts, and established procedures, using your meticulous attention to detail to ensure everything is in its proper place. Methodical and responsible, you can be counted on to see any task through to completion with precision and accuracy. You thrive in stable environments where you can apply your practical skills without interruption. While adapting to rapid change can be a challenge, your greatest gift is your integrity and the unshakable stability you provide to the world."
  },
  ISFP: {
    name: "The Artist",
    blurb: "You see beauty in the everyday. You live through senses—colors, sounds, textures. You’re gentle, adaptable, spontaneous. You value freedom, dislike conflict, and need space to express yourself. You’re empathetic and supportive, but private too. You create, explore, and appreciate. You dislike rigid schedules and heavy rules. You’d rather flow than force. You thrive in environments where you can be yourself—whether painting, designing, or helping quietly. You notice details others miss. You care about harmony and authenticity. Your gift is presence—you remind people life is meant to be felt, not just measured. Your challenge? Direction. You shine when you channel creativity into purpose, turning moments into meaning.",
    summary: "As the Artist, you are a gentle and observant soul with a deep appreciation for aesthetics and a flexible approach to life. You live in the moment, engaging the world through your senses and finding beauty in the details others overlook. Valuing personal freedom and harmony, you prefer to go with the flow rather than be constrained by rigid plans. You express your rich inner world through creative and often hands-on actions. While you may be private, you are deeply caring and loyal to those you hold dear. Your gift is your ability to translate your unique perspective into tangible beauty."
  },
  ISFJ: {
    name: "The Protector",
    blurb: "You’re steady, loyal, careful. People lean on you because you show up. You value tradition, family, service. You notice details others overlook. You dislike conflict but will defend what matters. You’re humble, thoughtful, kind. You thrive in supportive roles where your effort strengthens the group. You’re not loud, but you’re essential. You prefer predictability over risk. You may struggle to say no, but it’s because you care. You like order, routine, and clear roles. You’re practical, not flashy. You don’t just help—you protect. Your gift is reliability with heart. You keep teams, families, and communities together. Your challenge is remembering your needs too. You matter as much as those you serve.",
    summary: "As the Protector, you are a warm, dedicated, and reliable individual committed to the well-being of others. You have a keen eye for practical details and a strong sense of duty, making you an invaluable support for your family, friends, and community. You find fulfillment in upholding traditions and creating a secure and harmonious environment. While you are humble and often work behind the scenes, your loyalty and quiet strength are the foundation of many successful groups. Your greatest gift is your tireless dedication to protecting and caring for the people and institutions you value."
  }
};

//
// PRISM — 16 codes (B/F × X/T × M/N × L/C)
//
export const prismDescriptions: PersonaMap = {
  BXML: {
    name: "The Community-Minded Innovator",
    blurb:
      "You like order, but not cages. Builder at home base, Explorer out in the world. You back free markets because they reward craft and speed. You trust local decisions more than distant committees. You build playbooks, ship fast, and iterate in public. Tradition isn’t a brake; it’s a launchpad when it works. When it doesn’t, you fix it and move on. You value mentors, apprenticeships, and visible scoreboards. You love cities that hustle and neighborhoods that help. Your edge: stable systems that invite experimentation. Your filter: does this reduce friction, increase ownership, and pay off quickly? If yes, scale it locally, then copy it. If no, cut it. You measure progress by outcomes, not optics."
  },
  BXMC: {
    name: "The Structured Globalist",
    blurb:
      "You want structure with a passport. Builder at home, Explorer abroad. Markets excite you because they turn ideas into products. You still want smart guardrails and a central plan for the big lifts. You like standards, APIs, and rules that speed everyone up. You’d rather modernize institutions than burn them down. Local energy, national coordination. You scale what works and retire what doesn’t. You talk incentives, not slogans, and you trust dashboards over vibes. Identity, payments, and data rails should be simple and secure so founders can move. Your edge: disciplined execution that travels. Your filter: does this expand freedom and interoperability without chaos? If yes, standardize it. If not, simplify or scrap it."
  },
  BXNL: {
    name: "The Compassionate Localist",
    blurb:
      "You build communities that welcome change. Structure matters, so does exploration. Markets need shock absorbers—safety nets, cooperatives, public goods that keep risk survivable. You keep power close to the ground, where people know the context. You like apprenticeships, libraries, maker spaces, and mutual aid. You measure success by mobility, not headlines. Tradition gets modernized, not worshiped. You are allergic to bureaucracy for its own sake and to cynicism that blocks progress. Your playbook: clear rules, open data, shared tools, real feedback loops. Your edge: practical systems that include newcomers and protect strivers. Your filter: will this help the next family try, fail safely, and try again? If yes, ship it and share the template."
  },
  BXNC: {
    name: "The Progressive Nationalist",
    blurb:
      "You like order, access, and scale. Builder at street level, Explorer in culture. You back strong safety nets and national coordination to keep the floor solid while change races ahead. Government is a platform: identity, payments, data standards that lift everyone. Markets run the sprints; institutions set lanes, fairness, and resilience. You value competence over theater and upgrades over nostalgia. You retire dead weight and fund what compounds. Your edge: inclusive growth with a plan. Your filter: will this reduce systemic friction and raise national capacity? If yes, centralize the rails and open them up. If not, decentralize the experiment and learn fast."
  },
  BTML: {
    name: "The Traditional Entrepreneur",
    blurb:
      "You respect the blueprint. Builder by instinct, Traditionalist at heart. Markets reward craftsmanship, savings, and reputation, so you back them. You prefer decisions made nearby by people who live with the outcomes. Culture compounds when families, schools, and small firms are healthy. You keep what works, fix what’s broken, and skip fads. You like apprenticeships, trades, and steady compounding over hype cycles. You’re patient with quality and impatient with excuses. Your edge: dependable systems that last. Your filter: is this durable, testable, and good for the next generation? If yes, build it well and keep it simple. If no, cut scope until it is."
  },
  BTMC: {
    name: "The Principled Statesman",
    blurb:
      "You value order, heritage, and growth. Builder plus Traditionalist. Markets power prosperity, but national projects set direction. Institutions should defend standards, infrastructure, and security while letting enterprise compete. You prefer simple rules, stable money, and clear accountability. You modernize without losing the plot and prize duty over theater. You want schools that teach basics, trades, and civics that stick. Your edge: predictable systems that unlock long-term investment. Your filter: will this strengthen families, skills, and national capacity for decades ahead? If yes, fund it and hold leaders to real outcomes. If not, sunset it and move resources to what works."
  },
  BTNL: {
    name: "The Community Steward",
    blurb:
      "You build on bedrock values and look after the block. Builder plus Traditionalist with a Network tilt. You like safety nets run close to home—parishes, cooperatives, credit unions, local clinics. You trust neighbors before distant offices and value character as much as credentials. Markets are useful, not sacred. Culture is a commons to be stewarded. You favor apprenticeships, guilds, and civic rituals that bind people. You prefer tools that are simple, repairable, and owned locally. Your edge: resilient communities that don’t snap under stress. Your filter: does this strengthen families and small businesses this year? If yes, support it. If not, shrink it, localize it, or replace it with something people can run."
  },
  BTNC: {
    name: "The Guardian Nationalist",
    blurb:
      "You keep tradition in the frame and the safety net under the frame. Builder and Traditionalist with a central plan when needed. You want reliable institutions, fair floors, and clear standards that travel nationwide. Markets are tools; they are not the referee. You like national projects that renew skills, infrastructure, and culture. You prefer competence to charisma and implementation to headlines. Your edge: stability that lets families and firms plan. Your filter: does this policy help ordinary people build durable lives? If yes, codify it, fund it, and measure it. If not, streamline it or replace it with something that actually works."
  },
  FXML: {
    name: "The Libertarian Pioneer",
    blurb:
      "You believe freedom works when rules are simple and predictable. Freedom, Explorer, Market, Localist. You back free markets with minimal, predictable rules and real property rights. You push decisions to people who feel the consequences. You like open networks, crypto rails, and fast settlement because they cut gatekeepers. You test, iterate, ship, and let better ideas win. You partner loosely, build openly, and avoid bloat. Your edge: speed, skin in the game, and a bias for results. Your filter: does this increase freedom, reduce rent-seeking, and prove itself in the wild? If yes, scale it. If not, kill it fast and try the next idea."
  },
  FXMC: {
    name: "The Cosmopolitan Capitalist",
    blurb:
      "You’re pro-freedom and pro-connection. Explorer in culture, Market in economics, with a central spine for rights and scale. You want clear rules that protect liberty, competition, and honest markets. You back national standards for identity, data, and security so builders can go faster. You dislike red tape; you like APIs. Diplomacy, trade, and defense create room for individuals to thrive. Your edge: open systems that scale safely. Your filter: does this expand freedom and interoperability without inviting chaos? If yes, standardize it, document it, and open the doors. If not, simplify, sandbox, or sunset it before it metastasizes into bureaucracy."
  },
  FXNL: {
    name: "The Creative Collectivist",
    blurb:
      "You’re a free spirit who knows nobody thrives alone. Explorer plus Freedom with a Network and Localist lean. You like safety nets that help people bounce back and build again. You prefer cooperatives, DAOs, and mutual aid to faceless bureaucracy. You love culture swaps, open-source playbooks, and permissionless learning. You trust local pilots over distant decrees. You want tools that lower the cost of trying again. Your edge: communities that create opportunity without asking permission. Your filter: will this reduce friction for the next builder while keeping dignity intact? If yes, publish the guide, fund the kit, and let neighbors run with it."
  },
  FXNC: {
    name: "The Global Humanitarian",
    blurb:
      "You think freedom scales when foundations are shared. Explorer plus Freedom with a Network economy and central coordination for the heavy lifts. You want simple benefits, portable IDs, and clean rails so people can move, build, and trade. Markets do sprints; institutions set guardrails and keep the lights on. You value portability over paperwork and outcomes over optics. Your edge: access at scale without killing initiative. Your filter: will this lower the floor and raise the ceiling nationwide? If yes, standardize it, automate it, and measure the lift. If not, cut the steps, close the loopholes, and reopen the path for builders."
  },
  FTML: {
    name: "The Self-Reliant Traditionalist",
    blurb:
      "You value freedom with roots. Freedom plus Traditionalist, Market, and Localist. You like simple rules, strong families, and skin in the game. You respect craft, savings, and clear ownership. You mentor the next generation and expect them to earn trust. You prefer local control because feedback is fast and honest. You’ll keep rituals that work and ditch the rest. You choose sturdy tools over shiny trends. Your edge: independence that compounds over time. Your filter: does this help people stand on their own two feet this year and next? If yes, teach it, build it, and let results do the talking."
  },
  FTMC: {
    name: "The Constitutionalist",
    blurb:
      "You carry a pocket Constitution and a builder’s mindset. Freedom plus Tradition, Market, and a central backbone for rights and defense. You want lean rules, stable money, and strong institutions that protect liberty. You expect markets to solve most problems and government to set fair lines and keep them. You prefer clarity to cleverness and substance to spin. Your edge: principles that make execution simple. Your filter: does this increase freedom while safeguarding the basics at national scale? If yes, lock it in and publish the standard. If not, prune it back and get out of the way of the people doing the work."
  },
  FTNL: {
    name: "The Compassionate Neighbor",
    blurb:
      "You want people free—and not left behind. Freedom plus Tradition with Network supports and local stewardship. You like community-run safety nets, school choice, credit unions, and apprenticeships. You trust neighbors to deliver care with dignity and expect responsibility in return. Markets matter, but character matters more. You invest in families, skills, and the small institutions that hold towns together. You choose low-cost tools that anyone can learn. Your edge: mercy with accountability. Your filter: does this make the next household more resilient this year? If yes, back it with time, trust, and a public scoreboard so others can copy it."
  },
  FTNC: {
    name: "The Adaptive Altruist",
    blurb:
      "You believe liberty and duty can share a spine. Freedom plus Tradition with national coordination for shared goods. You want simple entitlements, stable standards, and strong rights that travel with citizens. Markets run faster when the floor is firm. You support broad access to education, healthcare, and secure identity—with minimal friction and maximum portability. You value stewardship over spectacle and plans over talk. Your edge: predictable rules that invite enterprise and protect the vulnerable. Your filter: will this scale nationwide without bloating into bureaucracy? If yes, codify it and automate the basics. If not, redesign it until builders and families feel the lift."
  }
};

//
// QuEST — 16 codes (Q/P × E/D × S/V × T/F)
//
export const qestDescriptions: PersonaMap = {
  QEST: {
    name: "The Strategic Empath",
    blurb:
      "You think in systems and speak human. Conceptual first, then plain English. You map patterns quickly, spot leverage points, and turn fuzzy ideas into clear plans. People trust you because you listen, summarize, and steer without theatrics. Under pressure you stay calm; the signal gets louder, not the noise. You finish tough work because compounding matters more than novelty. Your meetings end with owners, deadlines, and next steps. You default to feedback over blame and iteration over ego. Edge: insight with follow-through. Watch-out: don’t over-optimize the model while the market moves. Win by testing early, keeping the room aligned, and landing the plane on time."
  },
  QESF: {
    name: "The Humane Pivot",
    blurb:
      "You see around corners and keep people with you. Conceptual, empathic, steady—yet you pivot fast when the data moves. You run tight loops: observe, reframe, test, adjust. Teams like you because you protect morale and momentum. You simplify decisions into two or three clean options with tradeoffs, then pick and move. Calm is your baseline; you don’t add drama, you remove it. Flexibility isn’t flakiness here—it’s resourcefulness. Edge: pattern sense with low friction change. Watch-out: avoid endless exploration by setting tripwires to commit. Win by time-boxing experiments, naming your kill criteria, and capturing what you learn so the next pivot is cheaper and smarter."
  },
  QEVT: {
    name: "The Steely Sentinel",
    blurb:
      "You model the future and fortify the plan. Conceptual and empathic, but with a vigilant radar that catches risks early. You pressure-test assumptions, add buffers, and still move. People feel protected around you—you surface concerns without killing momentum. Stress sharpens your focus; you stay measured when others spike. You’re tenacious: deadlines met, corners not cut. Edge: foresight with resilience. Watch-out: don’t let risk language become a brake on ambition. Use red-team time windows and then commit. Win by pre-mortems, single-point-of-failure maps, and simple contingency playbooks that everyone can run at 2 a.m. when things wobble."
  },
  QEVF: {
    name: "The Sensitive Navigator",
    blurb:
      "You sense weak signals early and adapt with care. Conceptual thinker, empathic teammate, vigilant by default. You scan for edge cases, bring context others miss, and adjust course before problems grow teeth. People count on your read of the room and your instinct for timing. You prefer reversible bets, rapid feedback, and small wins that stack. Edge: early warning with low-drama pivots. Watch-out: analysis fatigue—set thresholds so caution doesn’t stall creation. Win by defining reversible vs. irreversible decisions, keeping experiments cheap, and writing crisp decision logs so the team understands the why, not just the what."
  },
  QDST: {
    name: "The Surgical Commander",
    blurb:
      "You think strategically and execute decisively. Conceptual plus directive. Your plans are short, sharp, and owned. You cut fluff, set clear constraints, and protect focus. Under load you’re steady; you remove blockers, make calls, and keep the drumbeat. You finish hard projects because you hate drift. People may call you blunt; they also call you when it matters. Edge: clarity under pressure with end-to-end delivery. Watch-out: soften the edges—human friction is a hidden cost. Win by pairing crisp directives with quick check-ins, giving context not just commands, and celebrating finished work so the team sees progress and stays bought-in."
  },
  QDSF: {
    name: "The Crisp Operator",
    blurb:
      "You bring clean thinking and adaptable leadership. Conceptual, directive, steady—yet willing to change route when reality bites. You define the goal line, trim scope, and rotate tactics without losing the mission. People follow because you remove ambiguity and keep score simple. You prefer weekly wins to yearly speeches. Edge: decisive priorities with agile tactics. Watch-out: avoid whiplash—name the reason for the switch and lock it in for a sprint. Win by using tight cadences, visible metrics, and after-action notes that explain what changed and why, so execution stays fast and coherent."
  },
  QDVT: {
    name: "The Gritty Field General",
    blurb:
      "You run toward the fire with a plan. Conceptual, directive, and vigilant—built for high-stakes execution. You throttle risk, sequence work, and hold the line until the outcome lands. Stress doesn’t rattle you; it narrows your focus. You’re relentless about standards and timelines. People respect your competence and trust your calls when minutes matter. Edge: disciplined urgency with risk control. Watch-out: don’t let crisis mode become culture. Win by reserving your hard-mode stance for real thresholds, then shifting to coach mode after the push so the team can recover and sustain performance."
  },
  QDVF: {
    name: "The Tactical Firefighter",
    blurb:
      "You stabilize chaos without freezing the system. Conceptual and directive with vigilant scanning and flexible plays. You triage, reassign, and create breathing room fast. You’re great at day-two plans that turn panic into process. People rely on you to make tough tradeoffs and communicate them clearly. Edge: rapid triage with coherent pivots. Watch-out: exit the emergency stance—reset norms once the fire’s out. Win by marking incident end-points, closing loops with stakeholders, and converting the best improvisations into lightweight runbooks for the next hit."
  },
  PEST: {
    name: "The Practical Mentor",
    blurb:
      "You build by doing and help others do the same. Practical over theoretical. Empathic and steady, you make hard work feel workable. You teach by example, create simple checklists, and remove small frictions that stall progress. You’re big on reps, craftsmanship, and visible improvement. Stress doesn’t spike you; you slow down to speed up. You finish because finishing teaches. Edge: hands-on coaching with dependable delivery. Watch-out: don’t under-invest in long-term leverage—set aside time for tools and automation. Win by pairing shop-floor wisdom with one leverage bet per quarter that compounds your team’s effort."
  },
  PESF: {
    name: "The Adaptive Caretaker",
    blurb:
      "You keep teams moving and intact. Practical, empathic, steady, and flexible when plans meet reality. You notice bottlenecks early, re-route work, and keep spirits up. You translate goals into steps that fit people’s capacity today. Your style is patient, service-oriented, and quietly effective. Edge: humane adaptability with low execution friction. Watch-out: avoid indefinite flexibility—name boundaries and commit for a sprint. Win by using simple service-level agreements, pairing tasks to strengths, and running short retros that turn small lessons into shared practice."
  },
  PEVT: {
    name: "The Steadfast Guardian",
    blurb:
      "You protect quality in the real world. Practical and empathic with a vigilant eye and tenacious follow-through. You review the details that matter, maintain safety rails, and still meet the date. People trust your judgment because you care about users and teams equally. Stress firms your posture; you handle the hard conversations without heat. Edge: thorough care with delivery you can schedule. Watch-out: perfection creep—decide what “good” means up front. Win by defining red lines, setting check-gates, and publishing a simple acceptance checklist everyone can run without you."
  },
  PEVF: {
    name: "The Grounded Mediator",
    blurb:
      "You balance people, risk, and pace in the messy middle. Practical, empathic, vigilant, and flexible. You de-escalate, design safe experiments, and keep work moving without breaking trust. Teams seek you when stakes are real and tempers high. You prefer reversible changes and small bets that buy information. Edge: calm tradeoffs with quick resets. Watch-out: don’t let caution turn into drift—set decision clocks. Win by clarifying ownership, creating two-option forks with clear criteria, and scheduling revisit points so choices stick long enough to matter."
  },
  PDST: {
    name: "The Execution Captain",
    blurb:
      "You turn plans into progress today. Practical and directive, steady and relentless. You define success in numbers, align the crew, and keep cadence until done. You hate thrash and guard focus like oxygen. Pressure doesn’t shake you; it sharpens your checklists. You coach for performance and celebrate finished work. Edge: operational clarity with grit. Watch-out: don’t over-tighten—leave room for ingenuity. Win by locking the mission, setting two or three lead metrics, and giving teams a small sandbox to improve the route while you protect the destination."
  },
  PDSF: {
    name: "The Agile Driver",
    blurb:
      "You get teams unstuck fast. Practical, directive, steady—and quick to switch tactics when the old way stops working. You simplify priorities, trim scope, and reassign resources without losing the goal. People appreciate your clear calls and short feedback loops. Edge: bias to action with coherent pivots. Watch-out: explain the why so changes don’t feel arbitrary. Win by running weekly planning, daily check-ins, and public scoreboards that show progress, so momentum builds even as tactics evolve."
  },
  PDVT: {
    name: "The Crisis Captain",
    blurb:
      "You’re built for the tough hour. Practical, directive, vigilant, and tenacious. You lock the room, set roles, and run the playbook. You cut risky paths, protect the core, and drive to resolution. Stress makes you more precise. After the fix, you capture lessons and harden the system. People may not like your tone mid-incident—they respect the outcome. Edge: decisive control under fire. Watch-out: turn the temperature down when the sirens stop. Win by declaring incident start/stop, rotating rest, and publishing a five-bullet postmortem with owners for the next 30 days."
  },
  PDVF: {
    name: "The Resilient Troubleshooter",
    blurb:
      "You stabilize, adapt, and hand back control. Practical, directive, vigilant, and flexible. You triage issues, choose the fastest safe path, and keep communication crisp. You’re comfortable making imperfect decisions when time is short. Once stable, you restore normal rhythms and remove single points of failure. Edge: rapid recovery with thoughtful handoffs. Watch-out: avoid living in perpetual triage—define thresholds for normal ops. Win by keeping incident kits ready, logging quick decisions, and turning repeated fixes into small automations that prevent the next 3 a.m. wake-up."
  }
};

/**
 * Helper — fetch persona by tool+code
 * @param tool The persona tool ('MBTI', 'PRISM', or 'QuEST')
 * @param code The 4-letter code for the persona
 * @returns Persona object or null if not found
 */
export function getPersona(tool: ToolKey, code: string): Persona | null {
  // Fix: Removed incorrect type assertion `as ToolKey`. `tool.toUpperCase()` returns a `string`, which allows for correct case-insensitive comparison.
  const t = tool.toUpperCase();
  if (!code) return null;
  
  if (t === 'MBTI') return mbtiDescriptions[code] ?? null;
  if (t === 'PRISM') return prismDescriptions[code] ?? null;
  if (t === 'QUEST') return qestDescriptions[code] ?? null;
  return null;
}