import React, { useState } from 'react';
import { qestDescriptions } from '../data/personaDescriptions';

const QuestExplorer: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState('QEST');
  const questCodes = Object.keys(qestDescriptions);
  const selectedCodeInfo = qestDescriptions[selectedCode];

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-lg">
      <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Explore the 16 Operational Styles</h3>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {questCodes.map((code) => (
          <button
            key={code}
            onClick={() => setSelectedCode(code)}
            className={`px-2 py-2 text-sm font-bold rounded-md transition-colors duration-200 ${
              selectedCode === code
                ? 'bg-indigo-500 text-white shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-indigo-100'
            }`}
          >
            {code}
          </button>
        ))}
      </div>
      {selectedCodeInfo && (
        <div className="bg-slate-50 rounded-lg p-4 min-h-[160px]">
            <h4 className="font-bold text-indigo-600">{selectedCodeInfo.name} ({selectedCode})</h4>
            <p className="text-slate-600 text-sm mt-2">{selectedCodeInfo.blurb}</p>
        </div>
      )}
    </div>
  );
};

export default QuestExplorer;
