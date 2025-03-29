
import React, { useState, useEffect, useRef } from 'react';
import { Clock, Volume2, VolumeX, Play, Pause, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface TimerProps {
  defaultTime?: number; // in seconds
  className?: string;
}

const Timer: React.FC<TimerProps> = ({ 
  defaultTime = 60,
  className
}) => {
  const [time, setTime] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [customTime, setCustomTime] = useState(defaultTime);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio when component mounts
  useEffect(() => {
    audioRef.current = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      if (!isMuted && audioRef.current) {
        audioRef.current.play();
      }
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time, isMuted]);
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const toggleTimer = () => {
    if (time === 0) {
      resetTimer();
    } else {
      setIsRunning(!isRunning);
    }
    
    if (time === 0 && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  
  const resetTimer = () => {
    setIsRunning(false);
    setTime(customTime);
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    if (audioRef.current && time === 0) {
      if (isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };
  
  const handleSliderChange = (value: number[]) => {
    const newTime = value[0] * 60; // Convert minutes to seconds
    setCustomTime(newTime);
    if (!isRunning) {
      setTime(newTime);
    }
  };
  
  const progressPercent = (time / customTime) * 100;
  
  return (
    <div className={cn(
      "rounded-lg border bg-card p-4 shadow-sm transition-all",
      time === 0 && "animate-pulse border-destructive",
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold font-serif flex items-center">
          <Clock className="mr-2 h-4 w-4" />
          Cooking Timer
        </h3>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMute}
          className="h-8 w-8"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="flex flex-col items-center mb-4">
        <div className="text-4xl font-semibold tabular-nums mb-2">
          {formatTime(time)}
        </div>
        <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-1000"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-muted-foreground">0</span>
        <Slider 
          defaultValue={[defaultTime / 60]}
          max={30}
          step={1}
          onValueChange={handleSliderChange}
          disabled={isRunning}
          className="mx-2"
        />
        <span className="text-xs text-muted-foreground">30min</span>
      </div>
      
      <div className="flex space-x-2">
        <Button 
          onClick={toggleTimer}
          className="flex-1"
          variant={time === 0 ? "destructive" : "default"}
        >
          {isRunning ? (
            <>
              <Pause className="mr-2 h-4 w-4" /> Pause
            </>
          ) : time === 0 ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4" /> Reset
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" /> Start
            </>
          )}
        </Button>
        
        <Button 
          onClick={resetTimer}
          variant="outline"
          className="w-10"
          disabled={time === customTime && !isRunning}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
