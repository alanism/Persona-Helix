import React from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  value: number | undefined;
  onChange: (questionId: string, value: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, questionNumber, value, onChange }) => {
  return (
    <div className="bg-white/60 p-6 rounded-lg border border-slate-200 shadow-sm mb-6">
      <p className="text-lg md:text-xl font-medium text-slate-800 mb-6">
        <span className="text-teal-500 font-bold">{questionNumber}.</span> {question.prompt}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-slate-500">Strongly Disagree</span>
        <div className="flex items-center justify-center space-x-2 md:space-x-3">
          {[1, 2, 3, 4, 5, 6, 7].map((score) => (
            <label
              key={score}
              className="relative flex items-center justify-center cursor-pointer"
            >
              <input
                type="radio"
                name={question.id}
                value={score}
                checked={value === score}
                onChange={() => onChange(question.id, score)}
                className="peer sr-only"
              />
              <div
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-slate-300 text-slate-500 transition-all duration-200
                  peer-hover:border-teal-400
                  peer-checked:bg-teal-500 peer-checked:border-teal-500 peer-checked:text-white peer-checked:shadow-[0_0_15px_rgba(20,184,166,0.5)]`}
              >
                {score}
              </div>
            </label>
          ))}
        </div>
        <span className="text-sm text-slate-500">Strongly Agree</span>
      </div>
    </div>
  );
};