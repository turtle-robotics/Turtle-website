import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './ProjectTicker.css';

export default function ProjectTicker({ projects }) {
  const navigate = useNavigate();
  const [animationPlayState, setAnimationPlayState] = useState('running');

  // Quadruple for ultra-smooth loop
  const multipliedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div 
      className="project-ticker-wrapper"
      onMouseEnter={() => setAnimationPlayState('paused')}
      onMouseLeave={() => setAnimationPlayState('running')}
    >
      <div className="project-ticker-container">
        <div 
          className="project-ticker-track"
          style={{ animationPlayState }}
        >
          {multipliedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="project-ticker-block glass-effect"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate(`/projects/${project.id}`);
              }}
            >
              <span className="project-ticker-acronym">{project.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}