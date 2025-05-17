import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
  };
  index: number;
  isActive: boolean;
  position: { x: number; y: number };
  rotation: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  isActive, 
  position, 
  rotation, 
  onClick 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (isActive) {
      setIsFlipped(!isFlipped);
    } else {
      onClick();
    }
  };

  const cardStyle = {
    transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
    zIndex: isActive ? 10 : 1,
    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
  };

  return (
    <div 
      className="absolute w-60 h-80 cursor-pointer"
      style={cardStyle}
      onClick={handleClick}
    >
      <div className={`
        relative w-full h-full rounded-xl shadow-md
        transform transition-all duration-500
        ${isFlipped ? 'rotate-y-180' : ''}
        ${isActive ? 'scale-110' : ''}
      `}>
        {/* Front of card */}
        <div className={`
          absolute w-full h-full rounded-xl overflow-hidden
          flex flex-col bg-white
          backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'}
        `}>
          <div 
            className="h-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="p-4 flex-1">
            <h3 className="font-bold text-lg text-slate-800">{project.title}</h3>
            <div className="flex flex-wrap mt-2 gap-1">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className={`
          absolute w-full h-full p-4 rounded-xl
          flex flex-col bg-white
          backface-hidden rotate-y-180
          ${isFlipped ? 'opacity-100' : 'opacity-0'}
        `}>
          <h3 className="font-bold text-lg text-slate-800 mb-2">{project.title}</h3>
          <p className="text-sm text-slate-600 flex-1">{project.description}</p>
          
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 text-sm font-medium inline-block"
              onClick={(e) => e.stopPropagation()}
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsCardDeck: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    const newPositions = projectsData.map((_, index) => {
      const offset = index * 5;
      return { x: offset, y: offset };
    });
    
    const newRotations = projectsData.map((_, index) => (index % 2 === 0 ? 1 : -1) * Math.random() * 3);
    
    setPositions(newPositions);
    setRotations(newRotations);
  }, []);

  const handleCardClick = (index: number) => {
    if (activeCardIndex === index) {
      // Clicking the active card again
      resetCards();
    } else {
      // Activate a new card
      spreadCards(index);
    }
  };

  const spreadCards = (activeIndex: number) => {
    const newPositions = projectsData.map((_, index) => {
      if (index === activeIndex) {
        return { x: 0, y: 0 };
      }
      
      const angle = ((index - activeIndex) * (360 / (projectsData.length - 1))) * (Math.PI / 180);
      
      return {
        x: Math.cos(angle) * 200,
        y: Math.sin(angle) * 120
      };
    });
    
    setPositions(newPositions);
    setRotations(projectsData.map((_, index) => 
      index === activeIndex ? 0 : (Math.random() * 8) - 4
    ));
    setActiveCardIndex(activeIndex);
  };

  const resetCards = () => {
    const newPositions = projectsData.map((_, index) => {
      const offset = index * 5;
      return { x: offset, y: offset };
    });
    
    const newRotations = projectsData.map((_, index) => 
      (index % 2 === 0 ? 1 : -1) * Math.random() * 3
    );
    
    setPositions(newPositions);
    setRotations(newRotations);
    setActiveCardIndex(null);
  };

  return (
    <div className="relative w-full" style={{ height: '480px' }}>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">My Projects</h2>
      
      <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            isActive={activeCardIndex === index}
            position={positions[index] || { x: 0, y: 0 }}
            rotation={rotations[index] || 0}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCardDeck;