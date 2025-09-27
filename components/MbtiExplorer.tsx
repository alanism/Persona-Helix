import React, { useState } from 'react';
import { mbtiDescriptions } from '../data/personaDescriptions';

const MbtiExplorer: React.FC = () => {
  const [selectedType, setSelectedType] = useState('ENTP');
  const mbtiTypes = Object.keys(mbtiDescriptions);
  const selectedTypeInfo = mbtiDescriptions[selectedType];

  return (
    <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-lg">
      <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Explore the 16 Cognitive Styles</h3>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {mbtiTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-2 py-2 text-sm font-bold rounded-md transition-colors duration-200 ${
              selectedType === type
                ? 'bg-orange-500 text-white shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-orange-100'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      {selectedTypeInfo && (
        <div className="bg-slate-50 rounded-lg p-4 min-h-[160px]">
            <h4 className="font-bold text-orange-600">{selectedTypeInfo.name} ({selectedType})</h4>
            <p className="text-slate-600 text-sm mt-2">{selectedTypeInfo.summary}</p>
        </div>
      )}
    </div>
  );
};

export default MbtiExplorer;
