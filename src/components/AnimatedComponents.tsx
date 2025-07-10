interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className = "", delay = 0 }: AnimatedTextProps) => {
  return (
    <div 
      className={`overflow-hidden ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="animate-slideUp opacity-0 animate-fadeIn">
        {text}
      </div>
    </div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FloatingElement = ({ children, delay = 0, className = "" }: FloatingElementProps) => {
  return (
    <div 
      className={`animate-float opacity-0 animate-fadeIn ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

export const GlowingCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      <div className="relative bg-gray-800 border border-gray-700 rounded-lg hover:border-purple-500/50 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};
