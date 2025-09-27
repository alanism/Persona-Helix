
import React, { useState, useCallback } from 'react';
import { Questionnaire } from './components/Questionnaire';
import { ResultsPage } from './components/ResultsPage';
import { Header } from './components/Header';
import { calculateResults } from './services/scoringService';
import { questionnaireData } from './data/questions';
import type { Answers, PersonalityResult } from './types';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<PersonalityResult | null>(null);

  const handleQuizComplete = useCallback((finalAnswers: Answers) => {
    const calculated = calculateResults(finalAnswers);
    setResults(calculated);
    window.scrollTo(0, 0);
  }, []);

  const handleReset = useCallback(() => {
    setAnswers({});
    setResults(null);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {!results ? (
          <>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-200 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 text-center">
                  Persona Helix:
                  <br className="sm:hidden" /> Preferences × Principles × Performance
                </h2>
                <div className="prose prose-lg prose-slate max-w-none text-slate-600 space-y-4">
                  <p>
                    Single scores miss people. They look tidy, then break in the real world. Persona Helix fixes that with three clean signals you can actually use.
                  </p>
                  <ul className="space-y-2 !my-4">
                    <li><strong>MBTI</strong> shows how you like to work—energy, information, decisions, pace.</li>
                    <li><strong>PRISM</strong> shows what you believe should happen—structure, culture, markets, power.</li>
                    <li><strong>QuEST</strong> shows how you perform under load—reasoning, social judgment, steadiness, tenacity.</li>
                  </ul>
                  <p>
                    Stack them and you see the whole human at a glance. ENTP × BXML × QDST isn’t a novelty string—it’s a playbook. Set the room for debate and speed. Frame decisions with local ownership and market instincts. Keep pressure high, drama low, and land the plane on time.
                  </p>
                  <p>
                    No vibes, no mysticism. Each axis ships with tilt and confidence so you know what’s strong, what’s balanced, and what needs coaching. Use it to hire smarter, pair cleaner, and prevent the frictions you used to discover the hard way.
                  </p>
                  <p>
                    One test, three lenses, zero overlap. That’s the point. Persona Helix doesn’t put you in a box; it gives you a handle—so you can place people where they’ll do their best work when it actually counts.
                  </p>
                  <p className="font-semibold text-slate-700">
                    Result: fewer misfits, faster ramps, cleaner wins. Run your Helix today.
                  </p>
                </div>
              </div>
            </div>

            <Questionnaire
              questions={questionnaireData.items}
              onComplete={handleQuizComplete}
              answers={answers}
              setAnswers={setAnswers}
            />
          </>
        ) : (
          <ResultsPage results={results} onReset={handleReset} />
        )}
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>MBTI + Prism + QuEST Persona Quiz &copy; 2024</p>
      </footer>
    </div>
  );
};

export default App;
