import { useState } from "react";

const StatisticsCard = ({ count, label, description }) => {
  return (
    <div className="group relative p-10 rounded-2xl glass-card transition-all duration-300 hover:scale-105 spotlight">
      {/* Content */}
      <div className="relative z-10">
        <div className="text-5xl text-accent mb-6">{count}+</div>
        <h3 className="text-xl font-light text-gray-200 mb-3">{label}</h3>
        {description && (
          <p className="text-sm font-light text-gray-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatisticsCard;
