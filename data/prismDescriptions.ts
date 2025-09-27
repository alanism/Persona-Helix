// Fix: Define PrismDescriptions and related types locally as they are not exported from types.ts.
interface PrismPersonaInfo {
  name: string;
  blurb: string;
}
type PrismDescriptions = Record<string, PrismPersonaInfo>;

/**
 * PRISM Axes Breakdown:
 * Social (S): B (Builder) vs. F (Freedom)
 * Cultural (C): X (Explorer) vs. T (Traditionalist)
 * Economic (E): M (Market) vs. N (Network)
 * Political (P): L (Localist) vs. C (Centralist)
 */
export const prismDescriptions: PrismDescriptions = {
  BXML: {
    name: "The Community-Minded Innovator",
    blurb: "You like order, but not cages. Builder at home base, Explorer out in the world. You back free markets because they reward craft and speed. You trust local decisions more than distant committees. You build playbooks, ship fast, and iterate in public. Tradition isn’t a brake; it’s a launchpad when it works. When it doesn’t, you fix it and move on. You value mentors, apprenticeships, and visible scoreboards. You love cities that hustle and neighborhoods that help. Your edge: stable systems that invite experimentation. Your filter: does this reduce friction, increase ownership, and pay off quickly? If yes, scale it locally, then copy it. If no, cut it. You measure progress by outcomes, not optics."
  },
  BXMC: {
    name: "The Structured Globalist",
    blurb: "You want structure with a passport. Builder at home, Explorer abroad. Markets excite you because they turn ideas into products. You still want smart guardrails and a central plan for the big lifts. You like standards, APIs, and rules that speed everyone up. You’d rather modernize institutions than burn them down. Local energy, national coordination. You scale what works and retire what doesn’t. You talk incentives, not slogans, and you trust dashboards over vibes. Identity, payments, and data rails should be simple and secure so founders can move. Your edge: disciplined execution that travels. Your filter: does this expand freedom and interoperability without chaos? If yes, standardize it. If not, simplify or scrap it."
  },
  BXNL: {
    name: "The Compassionate Localist",
    blurb: "You build communities that welcome change. Structure matters, so does exploration. Markets need shock absorbers—safety nets, cooperatives, public goods that keep risk survivable. You keep power close to the ground, where people know the context. You like apprenticeships, libraries, maker spaces, and mutual aid. You measure success by mobility, not headlines. Tradition gets modernized, not worshiped. You are allergic to bureaucracy for its own sake and to cynicism that blocks progress. Your playbook: clear rules, open data, shared tools, real feedback loops. Your edge: practical systems that include newcomers and protect strivers. Your filter: will this help the next family try, fail safely, and try again? If yes, ship it and share the template."
  },
  BXNC: {
    name: "The Progressive Nationalist",
    blurb: "You like order, access, and scale. Builder at street level, Explorer in culture. You back strong safety nets and national coordination to keep the floor solid while change races ahead. Government is a platform: identity, payments, data standards that lift everyone. Markets run the sprints; institutions set lanes, fairness, and resilience. You value competence over theater and upgrades over nostalgia. You retire dead weight and fund what compounds. Your edge: inclusive growth with a plan. Your filter: will this reduce systemic friction and raise national capacity? If yes, centralize the rails and open them up. If not, decentralize the experiment and learn fast."
  },
  BTML: {
    name: "The Traditional Entrepreneur",
    blurb: "You respect the blueprint. Builder by instinct, Traditionalist at heart. Markets reward craftsmanship, savings, and reputation, so you back them. You prefer decisions made nearby by people who live with the outcomes. Culture compounds when families, schools, and small firms are healthy. You keep what works, fix what’s broken, and skip fads. You like apprenticeships, trades, and steady compounding over hype cycles. You’re patient with quality and impatient with excuses. Your edge: dependable systems that last. Your filter: is this durable, testable, and good for the next generation? If yes, build it well and keep it simple. If no, cut scope until it is."
  },
  BTMC: {
    name: "The Principled Statesman",
    blurb: "You value order, heritage, and growth. Builder plus Traditionalist. Markets power prosperity, but national projects set direction. Institutions should defend standards, infrastructure, and security while letting enterprise compete. You prefer simple rules, stable money, and clear accountability. You modernize without losing the plot and prize duty over theater. You want schools that teach basics, trades, and civics that stick. Your edge: predictable systems that unlock long-term investment. Your filter: will this strengthen families, skills, and national capacity for decades ahead? If yes, fund it and hold leaders to real outcomes. If not, sunset it and move resources to what works."
  },
  BTNL: {
    name: "The Community Steward",
    blurb: "You build on bedrock values and look after the block. Builder plus Traditionalist with a Network tilt. You like safety nets run close to home—parishes, cooperatives, credit unions, local clinics. You trust neighbors before distant offices and value character as much as credentials. Markets are useful, not sacred. Culture is a commons to be stewarded. You favor apprenticeships, guilds, and civic rituals that bind people. You prefer tools that are simple, repairable, and owned locally. Your edge: resilient communities that don’t snap under stress. Your filter: does this strengthen families and small businesses this year? If yes, support it. If not, shrink it, localize it, or replace it with something people can run."
  },
  BTNC: {
    name: "The Guardian Nationalist",
    blurb: "You keep tradition in the frame and the safety net under the frame. Builder and Traditionalist with a central plan when needed. You want reliable institutions, fair floors, and clear standards that travel nationwide. Markets are tools; they are not the referee. You like national projects that renew skills, infrastructure, and culture. You prefer competence to charisma and implementation to headlines. Your edge: stability that lets families and firms plan. Your filter: does this policy help ordinary people build durable lives? If yes, codify it, fund it, and measure it. If not, streamline it or replace it with something that actually works."
  },
  FXML: {
    name: "The Libertarian Pioneer",
    blurb: "You believe freedom works when rules are simple and predictable. Freedom, Explorer, Market, Localist. You back free markets with minimal, predictable rules and real property rights. You push decisions to people who feel the consequences. You like open networks, crypto rails, and fast settlement because they cut gatekeepers. You test, iterate, ship, and let better ideas win. You partner loosely, build openly, and avoid bloat. Your edge: speed, skin in the game, and a bias for results. Your filter: does this increase freedom, reduce rent-seeking, and prove itself in the wild? If yes, scale it. If not, kill it fast and try the next idea."
  },
  FXMC: {
    name: "The Cosmopolitan Capitalist",
    blurb: "You’re pro-freedom and pro-connection. Explorer in culture, Market in economics, with a central spine for rights and scale. You want clear rules that protect liberty, competition, and honest markets. You back national standards for identity, data, and security so builders can go faster. You dislike red tape; you like APIs. Diplomacy, trade, and defense create room for individuals to thrive. Your edge: open systems that scale safely. Your filter: does this expand freedom and interoperability without inviting chaos? If yes, standardize it, document it, and open the doors. If not, simplify, sandbox, or sunset it before it metastasizes into bureaucracy."
  },
  FXNL: {
    name: "The Creative Collectivist",
    blurb: "You’re a free spirit who knows nobody thrives alone. Explorer plus Freedom with a Network and Localist lean. You like safety nets that help people bounce back and build again. You prefer cooperatives, DAOs, and mutual aid to faceless bureaucracy. You love culture swaps, open-source playbooks, and permissionless learning. You trust local pilots over distant decrees. You want tools that lower the cost of trying again. Your edge: communities that create opportunity without asking permission. Your filter: will this reduce friction for the next builder while keeping dignity intact? If yes, publish the guide, fund the kit, and let neighbors run with it."
  },
  FXNC: {
    name: "The Global Humanitarian",
    blurb: "You think freedom scales when foundations are shared. Explorer plus Freedom with a Network economy and central coordination for the heavy lifts. You want simple benefits, portable IDs, and clean rails so people can move, build, and trade. Markets do sprints; institutions set guardrails and keep the lights on. You value portability over paperwork and outcomes over optics. Your edge: access at scale without killing initiative. Your filter: will this lower the floor and raise the ceiling nationwide? If yes, standardize it, automate it, and measure the lift. If not, cut the steps, close the loopholes, and reopen the path for builders."
  },
  FTML: {
    name: "The Self-Reliant Traditionalist",
    blurb: "You value freedom with roots. Freedom plus Traditionalist, Market, and Localist. You like simple rules, strong families, and skin in the game. You respect craft, savings, and clear ownership. You mentor the next generation and expect them to earn trust. You prefer local control because feedback is fast and honest. You’ll keep rituals that work and ditch the rest. You choose sturdy tools over shiny trends. Your edge: independence that compounds over time. Your filter: does this help people stand on their own two feet this year and next? If yes, teach it, build it, and let results do the talking."
  },
  FTMC: {
    name: "The Constitutionalist",
    blurb: "You carry a pocket Constitution and a builder’s mindset. Freedom plus Tradition, Market, and a central backbone for rights and defense. You want lean rules, stable money, and strong institutions that protect liberty. You expect markets to solve most problems and government to set fair lines and keep them. You prefer clarity to cleverness and substance to spin. Your edge: principles that make execution simple. Your filter: does this increase freedom while safeguarding the basics at national scale? If yes, lock it in and publish the standard. If not, prune it back and get out of the way of the people doing the work."
  },
  FTNL: {
    name: "The Compassionate Neighbor",
    blurb: "You want people free—and not left behind. Freedom plus Tradition with Network supports and local stewardship. You like community-run safety nets, school choice, credit unions, and apprenticeships. You trust neighbors to deliver care with dignity and expect responsibility in return. Markets matter, but character matters more. You invest in families, skills, and the small institutions that hold towns together. You choose low-cost tools that anyone can learn. Your edge: mercy with accountability. Your filter: does this make the next household more resilient this year? If yes, back it with time, trust, and a public scoreboard so others can copy it."
  },
  FTNC: {
    name: "The Adaptive Altruist",
    blurb: "You believe liberty and duty can share a spine. Freedom plus Tradition with national coordination for shared goods. You want simple entitlements, stable standards, and strong rights that travel with citizens. Markets run faster when the floor is firm. You support broad access to education, healthcare, and secure identity—with minimal friction and maximum portability. You value stewardship over spectacle and plans over talk. Your edge: predictable rules that invite enterprise and protect the vulnerable. Your filter: will this scale nationwide without bloating into bureaucracy? If yes, codify it and automate the basics. If not, redesign it until builders and families feel the lift."
  }
};