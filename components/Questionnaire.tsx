import React, { useState, useMemo } from 'react';
import type { Question, Answers } from '../types';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';

interface QuestionnaireProps {
  questions: Question[];
  onComplete: (answers: Answers) => void;
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
}

const QUESTIONS_PER_PAGE = 6;

export const Questionnaire: React.FC<QuestionnaireProps> = ({ questions, onComplete, answers, setAnswers }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

  const currentQuestions = useMemo(() => {
    const start = currentPage * QUESTIONS_PER_PAGE;
    const end = start + QUESTIONS_PER_PAGE;
    return questions.slice(start, end);
  }, [currentPage, questions]);

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isCurrentPageCompleted = useMemo(() => {
    return currentQuestions.every(q => answers[q.id] !== undefined);
  }, [answers, currentQuestions]);
  
  const allQuestionsAnswered = Object.keys(answers).length === questions.length;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const progressPercentage = (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-lg">
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-700 mb-2">Page {currentPage + 1} of {totalPages}</h2>
            <ProgressBar current={Object.keys(answers).length} total={questions.length} />
        </div>
        
        {currentQuestions.map((q, index) => (
          <QuestionCard
            key={q.id}
            question={q}
            questionNumber={currentPage * QUESTIONS_PER_PAGE + index + 1}
            value={answers[q.id]}
            onChange={handleAnswerChange}
          />
        ))}

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="px-6 py-2 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          {currentPage < totalPages - 1 ? (
            <button
              onClick={handleNext}
              disabled={!isCurrentPageCompleted}
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              Next
            </button>
          ) : (
             <button
              onClick={() => onComplete(answers)}
              disabled={!allQuestionsAnswered}
              className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors shadow-lg shadow-teal-500/20"
            >
              See Your Results
            </button>
          )}
        </div>
      </div>
    </div>
  );
};