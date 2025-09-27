import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { PersonalityResult } from '../types';
import { generateCombinationAnalysis } from '../services/geminiService';

interface CombinationAnalysisProps {
  results: PersonalityResult;
}

const AnalysisRenderer: React.FC<{ content: string }> = ({ content }) => {
    // Split by markdown headings (##) but keep the delimiter
    const sections = content.split(/(?=##\s)/g).filter(s => s.trim() !== '');

    return (
        <div className="space-y-8 text-left">
            {sections.map((section, index) => {
                const lines = section.trim().split('\n');
                const title = lines[0].replace(/##/g, '').trim();
                const body = lines.slice(1).join('\n').trim();
                
                const uniqueKey = `${title.replace(/\s/g, '-')}-${index}`;

                return (
                    <div key={uniqueKey}>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-teal-500 to-indigo-500">{title}</h3>
                        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {body}
                          </ReactMarkdown>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const CombinationAnalysis: React.FC<CombinationAnalysisProps> = ({ results }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRunAnalysis = async () => {
    setIsLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const generatedAnalysis = await generateCombinationAnalysis(
        results.mbti.type,
        results.mbti.name,
        results.prism.code,
        results.prism.name,
        results.quest.type,
        results.quest.name
      );
      setAnalysis(generatedAnalysis);
    } catch (e) {
        if (e instanceof Error) {
            console.error(e);
            setError(`Failed to generate analysis. Please check your API key and try again.`);
        } else {
            setError("An unknown error occurred.");
        }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-12">
        <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-lg w-full max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-900">The Combination Analysis</h2>
                <p className="text-slate-600 mt-2 max-w-3xl mx-auto">
                    Your MBTI shows how you think, Prism shows what you value, and QuEST shows how you act. Let's combine them for a deep-dive, AI-powered analysis of your unique personality archetype.
                </p>
            </div>
            
            {!analysis && !isLoading && !error && (
                 <div className="mt-8 text-center">
                    <button
                        onClick={handleRunAnalysis}
                        disabled={isLoading}
                        className="bg-gradient-to-r from-orange-500 via-teal-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg disabled:opacity-50 disabled:cursor-wait"
                    >
                        Run AI Analysis
                    </button>
                </div>
            )}

            {isLoading && (
                <div className="mt-8 text-center">
                    <div className="flex justify-center items-center space-x-2">
                        <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <p className="text-slate-600 mt-4">Generating your personalized analysis... this may take a moment.</p>
                </div>
            )}

            {error && (
                <div className="mt-8 text-center bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <p className="font-bold">An Error Occurred</p>
                    <p>{error}</p>
                </div>
            )}

            {analysis && !isLoading && (
                <div className="mt-8 border-t border-slate-200 pt-8">
                   <AnalysisRenderer content={analysis} />
                </div>
            )}
        </div>
    </div>
  );
};

export default CombinationAnalysis;
