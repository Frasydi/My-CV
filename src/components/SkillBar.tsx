import { useEffect, useState } from 'react';

interface SkillProps {
  name: string;
  level: number;
  delay?: number;
}

export const SkillBar = ({ name, level, delay = 0 }: SkillProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setAnimatedLevel(level);
      }, 200);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className={`mb-6 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-gray-300">{name}</span>
        <span className="text-sm text-gray-400 font-medium">{level}%</span>
      </div>
      <div className="relative w-full bg-slate-700 rounded-full h-3 overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600"></div>
        <div 
          className="relative bg-gradient-to-r from-slate-500 to-gray-400 h-3 rounded-full transition-all duration-2000 ease-out shadow-lg"
          style={{ 
            width: `${animatedLevel}%`,
            boxShadow: '0 0 8px rgba(100, 116, 139, 0.4)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
        </div>
      </div>
    </div>
  );
};
