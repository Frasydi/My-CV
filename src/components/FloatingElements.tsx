export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-60 left-1/4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rotate-45 animate-pulse-custom"></div>
      <div className="absolute top-80 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 opacity-30 rotate-12 animate-pulse-custom" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Lines */}
      <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30"></div>
      <div className="absolute top-2/3 right-0 w-40 h-px bg-gradient-to-l from-transparent via-purple-300 to-transparent opacity-30"></div>
    </div>
  );
};
