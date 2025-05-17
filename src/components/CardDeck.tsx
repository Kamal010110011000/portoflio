import React, { useState, useEffect } from 'react';
import Card from './Card';
import ProjectsCardDeck from './ProjectsCardDeck';
import { CardData } from '../types';
import { Shuffle } from 'lucide-react';

interface CardDeckProps {
  cards: CardData[];
}

const CardDeck: React.FC<CardDeckProps> = ({ cards }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);
  const [showProjects, setShowProjects] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  // Initialize card positions
  useEffect(() => {
    arrangeCards();
  }, [cards]);

  const arrangeCards = () => {
    const cardWidth = 300; // Width of card + gap
    const totalWidth = cardWidth * (cards.length - 1);
    const startX = -totalWidth / 2;
    
    const newPositions = cards.map((_, index) => ({
      x: startX + (index * cardWidth),
      y: 0
    }));
    setPositions(newPositions);
  };

  const shuffleCards = () => {
    setIsShuffling(true);
    
    // Create a shuffled array of positions
    const shuffledIndices = [...Array(cards.length).keys()]
      .sort(() => Math.random() - 0.5);
      
    const cardWidth = 300;
    const totalWidth = cardWidth * (cards.length - 1);
    const startX = -totalWidth / 2;
    
    const newPositions = shuffledIndices.map((originalIndex) => ({
      x: startX + (originalIndex * cardWidth),
      y: 0
    }));
    
    setPositions(newPositions);
    
    setTimeout(() => {
      setIsShuffling(false);
    }, 1000);
  };

  const handleCardClick = (index: number) => {
    if (cards[index].type === 'projects') {
      setShowProjects(!showProjects);
    }
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <div className="relative w-full" style={{ height: '600px' }}>
      <button 
        onClick={shuffleCards}
        disabled={isShuffling}
        className="absolute top-4 right-4 z-50 bg-white px-4 py-2 rounded-full shadow-md 
                   flex items-center gap-2 hover:bg-slate-50 transition-colors
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Shuffle size={20} className={`${isShuffling ? 'animate-spin' : ''}`} />
        Shuffle
      </button>
      
      <div className="relative w-full h-[500px]" style={{ perspective: '2000px' }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            isActive={activeCardIndex === index}
            onClick={() => handleCardClick(index)}
            zIndex={isShuffling ? Math.random() * cards.length : cards.length - index}
            position={positions[index] || { x: 0, y: 0 }}
            isShuffling={isShuffling}
          />
        ))}
      </div>
      
      {showProjects && (
        <div className="mt-8">
          <ProjectsCardDeck />
        </div>
      )}
    </div>
  );
};

export default CardDeck;