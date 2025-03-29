
import React, { useEffect, useRef } from 'react';

const BackgroundTexture: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create different types of particles for visual interest
    let particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      color: string;
      type: 'circle' | 'square' | 'triangle';
      rotation: number;
      rotationSpeed: number;
    }[] = [];
    
    const particleCount = 80; // Increased particle count
    
    // Initialize particles with more variety
    for (let i = 0; i < particleCount; i++) {
      const type = Math.random() > 0.7 
        ? 'square' 
        : Math.random() > 0.5 
          ? 'triangle' 
          : 'circle';
          
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1.5, // Slightly larger particles
        speed: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.6 + 0.2, // Increased opacity
        color: Math.random() > 0.7 ? 'var(--accent-rgb)' : 'var(--primary-rgb)',
        type,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01
      });
    }
    
    const drawParticle = (particle: typeof particles[0]) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      if (particle.type === 'circle') {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.fill();
      } 
      else if (particle.type === 'square') {
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
      }
      else if (particle.type === 'triangle') {
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.beginPath();
        ctx.moveTo(0, -particle.size * 1.5);
        ctx.lineTo(particle.size, particle.size);
        ctx.lineTo(-particle.size, particle.size);
        ctx.closePath();
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.fill();
      }
      
      ctx.restore();
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        // Draw the particle
        drawParticle(particle);
        
        // Update position
        particle.y -= particle.speed;
        particle.x += Math.sin(particle.y * 0.01) * 0.5; // Add gentle horizontal movement
        
        // Update rotation
        particle.rotation += particle.rotationSpeed;
        
        // Reset particles that go off-screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }} // Increased opacity to make particles more visible
    />
  );
};

export default BackgroundTexture;
