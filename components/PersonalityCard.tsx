import React from 'react';
import type { AxisResult } from '../types';
import DichotomyScale from './DichotomyScale';

interface PersonalityCardProps {
  type: 'mbti' | 'prism' | 'quest';
  title: string;
  mainId: string;
  name: string;
  blurb: string;
  axesData: AxisResult[];
  headingColorClass: string;
  dichotomyColor: 'orange' | 'teal' | 'indigo';
}

export const PersonalityCard: React.FC<PersonalityCardProps> = ({
  type,
  title,
  mainId,
  name,
  blurb,
  axesData,
  headingColorClass,
  dichotomyColor,
}) => (
  <div className="bg-white backdrop-blur-sm rounded-xl p-8 border border-slate-200 shadow-lg flex flex-col h-full">
    <h3 className={`text-sm font-bold uppercase tracking-widest ${headingColorClass}`}>
      {title}
    </h3>
    <p className="text-4xl font-bold text-slate-900 mt-2">{mainId}</p>
    <p className="text-2xl font-semibold text-slate-700">{name}</p>
    <p className="text-slate-600 mt-4 text-base leading-relaxed flex-grow">
      {blurb}
    </p>
    <div className="mt-6">
      <h4 className="font-semibold text-slate-700 mb-2 text-center">
        Your {
            type === 'mbti' ? 'Cognitive' :
            type === 'prism' ? 'Value' :
            'Operational'
        } Profile
      </h4>
      <DichotomyScale axesData={axesData} color={dichotomyColor} type={type} />
    </div>
  </div>
);
