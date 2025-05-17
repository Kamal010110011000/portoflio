import React, { useState } from 'react';
import { CardData } from '../types';

interface CardProps {
  card: CardData;
  index: number;
  isActive: boolean;
  onClick: () => void;
  zIndex: number;
  position: { x: number; y: number };
  isShuffling: boolean;
}

const Card: React.FC<CardProps> = ({ 
  card, 
  isActive, 
  onClick, 
  zIndex, 
  position,
  isShuffling
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleMouseEnter = () => {
    if (!isActive && !isShuffling) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isActive) {
      setIsFlipped(false);
    }
  };

  const cardStyle = {
    transform: `
      translate(${position.x}px, ${position.y}px)
      rotateY(${isFlipped ? '180deg' : '0deg'})
    `,
    transition: isShuffling 
      ? 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      : 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    zIndex,
  };

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-72 h-96 cursor-pointer"
      style={cardStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Front of card */}
      <div className={`
        absolute w-full h-full rounded-xl
        transform transition-all duration-500
        backface-hidden
        ${isFlipped ? 'opacity-0' : 'opacity-100'}
        ${isActive ? 'scale-105' : ''}
        bg-white shadow-lg
        border border-slate-200
      `}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-slate-100" />
        </div>
      </div>

      {/* Back of card */}
      <div className={`
        absolute w-full h-full rounded-xl
        transform transition-all duration-500
        backface-hidden rotate-y-180
        ${isFlipped ? 'opacity-100' : 'opacity-0'}
        bg-white shadow-xl
      `}>
        <div 
          className="h-24 rounded-t-xl bg-cover bg-center 
                     flex items-center justify-center"
          style={{ backgroundColor: card.color }}
        >
          <card.icon className="w-12 h-12 text-white" />
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h2>
          <p className="text-slate-600 text-sm mb-4">{card.description}</p>
          {card.content}
        </div>
      </div>
    </div>
  );
};

export default Card;