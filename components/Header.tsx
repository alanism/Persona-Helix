import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-teal-500 to-indigo-500">
          MBTI + Prism + QuEST Persona Discovery
        </h1>
      </div>
    </header>
  );
};
