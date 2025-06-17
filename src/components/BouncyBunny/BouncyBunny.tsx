import { useState, useEffect, useRef, useCallback } from 'react';

interface BouncyBunnyProps {
  id: string;
  onRemove?: (id: string) => void;
  totalBunnyCount?: number;
}

interface Position {
  x: number;
  y: number;
}

interface Velocity {
  x: number;
  y: number;
}

export function BouncyBunny({ totalBunnyCount = 1 }: BouncyBunnyProps) {
  const [position, setPosition] = useState<Position>(() => ({
    x: Math.random() * (window.innerWidth - 100),
    y: Math.random() * (window.innerHeight - 100),
  }));
  
  const [velocity, setVelocity] = useState<Velocity>(() => ({
    x: (Math.random() - 0.5) * 4 + 2, // Random speed between -2 and 4, biased toward positive
    y: (Math.random() - 0.5) * 4,
  }));

  const animationRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);
  const bunnySize = 64; // Assumed bunny GIF size

  // Throttle animation updates to reduce CPU usage - more throttling with more bunnies
  const animate = useCallback((timestamp: number) => {
    // Dynamic throttling based on bunny count: more bunnies = lower frame rate
    const throttleTime = totalBunnyCount > 50 ? 50 : totalBunnyCount > 20 ? 33 : 16;
    if (timestamp - lastUpdateRef.current < throttleTime) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    lastUpdateRef.current = timestamp;

    setPosition(prevPosition => {
      const newPosition = { ...prevPosition };
      
      // Update position
      newPosition.x += velocity.x;
      newPosition.y += velocity.y;
      
      // Bounce off walls
      let newVelocity = { ...velocity };
      
      // Left and right walls
      if (newPosition.x <= 0 || newPosition.x >= window.innerWidth - bunnySize) {
        newVelocity.x = -newVelocity.x;
        newPosition.x = Math.max(0, Math.min(newPosition.x, window.innerWidth - bunnySize));
      }
      
      // Top and bottom walls
      if (newPosition.y <= 0 || newPosition.y >= window.innerHeight - bunnySize) {
        newVelocity.y = -newVelocity.y;
        newPosition.y = Math.max(0, Math.min(newPosition.y, window.innerHeight - bunnySize));
      }
      
      // Update velocity if it changed
      if (newVelocity.x !== velocity.x || newVelocity.y !== velocity.y) {
        setVelocity(newVelocity);
      }
      
      return newPosition;
    });
    
    animationRef.current = requestAnimationFrame(animate);
  }, [velocity, totalBunnyCount]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setPosition(prevPosition => ({
        x: Math.min(prevPosition.x, window.innerWidth - bunnySize),
        y: Math.min(prevPosition.y, window.innerHeight - bunnySize),
      }));
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        zIndex: 9999, // Above everything else
        transform: velocity.x < 0 ? 'scaleX(-1)' : 'scaleX(1)', // Mirror when moving left
        transition: 'transform 0.1s ease',
      }}
    >
      <img
        src="/bunny.gif"
        alt="Bouncy bunny"
        width={bunnySize}
        height={bunnySize}
        style={{
          imageRendering: 'pixelated', // Keep GIF crisp
        }}
      />
    </div>
  );
}
