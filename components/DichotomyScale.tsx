import React from 'react';
import type { AxisResult, ScoringAxis } from '../types';
import { mbti15Scoring } from '../data/mbti_15_scoring';
import { prism15Scoring } from '../data/prism_15_scoring';
import { quest15Scoring } from '../data/quest_15_scoring';


interface DichotomyScaleProps {
  axesData: AxisResult[];
  color: 'orange' | 'teal' | 'indigo';
  type: 'mbti' | 'prism' | 'quest';
}

const DichotomyScale: React.FC<DichotomyScaleProps> = ({ axesData, color, type }) => {
  const width = 400;
  const height = 120;
  const midY = height / 2;
  const maxOffset = 30;

  let allAxes: ScoringAxis[];
  switch (type) {
    case 'mbti':
      allAxes = mbti15Scoring.axes;
      break;
    case 'prism':
      allAxes = prism15Scoring.axes;
      break;
    case 'quest':
      allAxes = quest15Scoring.axes;
      break;
    default:
      allAxes = [];
  }

  const scale = (score: number) => {
    const diff = score - 4; // Midpoint 4
    return (diff / 3) * maxOffset; // Scale from [-3, 3] to [-maxOffset, maxOffset]
  };

  const pointColor =
    color === 'orange' ? '#f97316' :
    color === 'teal' ? '#14b8a6' :
    '#6366f1'; // indigo-500

  return (
    <div className="w-full overflow-x-auto py-4">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="mx-auto" aria-label={`A chart showing ${type} scores.`}>
        <defs>
          <pattern id="dot-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#cbd5e1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" opacity="0.6" />

        <line x1="20" y1={midY} x2={width - 20} y2={midY} stroke="#64748b" strokeWidth="2" />

        {allAxes.map((axis, index) => {
          const axisResult = axesData.find(a => a.key === axis.key);
          if (!axisResult) return null;

          // Fix: Corrected a typo from `all.length` to `allAxes.length`.
          const xPos = (width / allAxes.length) * index + (width / allAxes.length / 2);
          const yOffset = scale(axisResult.score);
          const yPos = midY - yOffset;

          return (
            <g key={axis.key} role="group" aria-label={`${axis.name || axis.key} score: ${axisResult.score.toFixed(2)}, resulting in letter ${axisResult.letter}`}>
              <text x={xPos} y={midY - maxOffset - 10} textAnchor="middle" fill="#334155" fontSize="14" fontWeight="bold">
                {axis.high}
              </text>
              <text x={xPos} y={midY + maxOffset + 20} textAnchor="middle" fill="#334155" fontSize="14" fontWeight="bold">
                {axis.low}
              </text>
              <circle cx={xPos} cy={yPos} r="8" fill={pointColor} />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default DichotomyScale;