import React, { useState } from 'react';
import { prismDescriptions } from '../data/personaDescriptions';

const PrismExplorer: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState('BXML');
  const prismCodes = Object.keys(prismDescriptions);
  const selectedCodeInfo = prismDescriptions[selectedCode];

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-lg">
      <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Explore the 16 Value Lenses</h3>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {prismCodes.map((code) => (
          <button
            key={code}
            onClick={() => setSelectedCode(code)}
            className={`px-2 py-2 text-sm font-bold rounded-md transition-colors duration-200 ${
              selectedCode === code
                ? 'bg-teal-500 text-white shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-teal-100'
            }`}
          >
            {code}
          </button>
        ))}
      </div>
      {selectedCodeInfo && (
        <div className="bg-slate-50 rounded-lg p-4 min-h-[160px]">
            <h4 className="font-bold text-teal-600">{selectedCodeInfo.name} ({selectedCode})</h4>
            <p className="text-slate-600 text-sm mt-2">{selectedCodeInfo.blurb}</p>
        </div>
      )}
    </div>
  );
};

export default PrismExplorer;
