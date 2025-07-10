interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const ExperienceCard = ({ title, company, period, description }: ExperienceProps) => {
  return (
    <div className="group relative bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700 hover:border-slate-600 transform hover:-translate-y-2 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-slate-500 to-gray-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-gray-50 transition-all duration-300">{title}</h3>
            <p className="text-gray-300 font-semibold text-lg">{company}</p>
          </div>
          <span className="text-sm text-gray-300 bg-slate-700 group-hover:bg-slate-600 px-4 py-2 rounded-full mt-2 md:mt-0 transition-colors duration-300 font-medium">
            {period}
          </span>
        </div>
        <ul className="space-y-3">
          {description.map((item, index) => (
            <li key={index} className="text-gray-300 flex items-start group-hover:text-gray-200 transition-colors duration-300">
              <span className="text-gray-400 mr-3 mt-1 transform group-hover:scale-125 transition-transform duration-300">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
