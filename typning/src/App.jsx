import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Pause, Play, RotateCcw } from 'lucide-react';

const SAMPLE_TEXT = `The evening sun cast long shadows across the streets of Paris, as Monsieur Valjean walked quietly through the gathering dusk. His thoughts were heavy with the weight of his past, and the path ahead seemed uncertain in the fading light. The cobblestones echoed with each careful step, a reminder of his journey's beginning. Years of hardship had taught him to move with caution, to blend into the shadows that now stretched like long fingers across the ancient city walls. The sound of distant bells rang through the evening air, calling the faithful to vespers. Valjean paused, letting the familiar melody wash over him. Each toll seemed to speak of redemption, of the promise he had made so many years ago in the bishop's house. The silver candlesticks, now safely hidden away, were a constant reminder of that transformative moment. As he continued his way through the narrow streets, the scent of fresh bread wafted from a nearby bakery. It reminded him of simpler times, of the nineteen years spent in Toulon, where such simple pleasures were nothing more than distant dreams.`;

const TypingTest = () => {
  const [typed, setTyped] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const timerRef = useRef(null);
  const textContainerRef = useRef(null);
  const inputRef = useRef(null);

  // Calculate metrics
  useEffect(() => {
    if (!startTime || isPaused) return;

    const timeInMinutes = elapsedTime / 60;
    const wordsTyped = typed.split(' ').length;
    const currentWpm = Math.round((wordsTyped / timeInMinutes) || 0);

    let correctChars = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === SAMPLE_TEXT[i]) correctChars++;
    }
    const currentAccuracy = typed.length ? Math.round((correctChars / typed.length) * 100) : 100;

    setWpm(currentWpm);
    setAccuracy(currentAccuracy);
  }, [typed, startTime, elapsedTime, isPaused]);

  // Timer
  useEffect(() => {
    if (startTime && !isPaused && !isFinished) {
      timerRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTime, isPaused, isFinished]);

  // Handle typing
  const handleTyping = (e) => {
    if (isPaused || isFinished) return;

    const newTyped = e.target.value;
    if (!startTime) {
      setStartTime(Date.now());
    }

    setTyped(newTyped);

    if (newTyped.length === SAMPLE_TEXT.length) {
      setIsFinished(true);
      clearInterval(timerRef.current);
    }

    // Auto-scroll
    if (textContainerRef.current) {
      const containerHeight = textContainerRef.current.offsetHeight;
      const scrollPosition = textContainerRef.current.scrollTop;
      const totalHeight = textContainerRef.current.scrollHeight;
      
      // Calculate approximate position of cursor
      const progress = newTyped.length / SAMPLE_TEXT.length;
      const targetScroll = (totalHeight - containerHeight) * progress;
      
      if (Math.abs(targetScroll - scrollPosition) > 30) {
        textContainerRef.current.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle pause/resume
  const togglePause = () => {
    setIsPaused(prev => !prev);
    if (isPaused) {
      inputRef.current?.focus();
    }
  };

  // Handle restart
  const handleRestart = () => {
    setTyped('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setElapsedTime(0);
    setIsPaused(false);
    setIsFinished(false);
    if (textContainerRef.current) {
      textContainerRef.current.scrollTo({ top: 0 });
    }
    inputRef.current?.focus();
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        togglePause();
      } else if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
        handleRestart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="text-2xl font-bold flex items-center">
          <span className="text-black">Type</span>
          <span className="text-blue-500">Book</span>
        </div>
        
        <div className="flex gap-8">
          <div className="text-center">
            <div className="text-2xl font-semibold">{wpm}</div>
            <div className="text-sm text-gray-500">WPM</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-semibold">{accuracy}</div>
            <div className="text-sm text-gray-500">ACC %</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-semibold">{formatTime(elapsedTime)}</div>
            <div className="text-sm text-gray-500">TIME</div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-2">Currently reading</div>
        <h1 className="text-2xl font-bold mb-1">Les Misérables</h1>
        <div className="text-gray-600">by Victor Hugo</div>
      </div>

      <Card className="mb-4">
        <CardContent className="p-12 relative">
          <div 
            ref={textContainerRef}
            className="max-w-5xl mx-auto h-48 overflow-y-auto hide-scrollbar"
            style={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '::-webkit-scrollbar': { display: 'none' }
            }}
          >
            <div className="text-xl leading-relaxed relative">
              {SAMPLE_TEXT.split('').map((char, index) => {
                const isTyped = index < typed.length;
                const isCorrect = typed[index] === char;
                return (
                  <span
                    key={index}
                    className={`${
                      isTyped
                        ? isCorrect
                          ? 'text-black'
                          : 'text-red-500 bg-red-100'
                        : 'text-gray-300'
                    }`}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </div>
          {isPaused && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <div className="text-xl font-semibold text-gray-600">Paused</div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="relative h-2 bg-gray-200 rounded-full mb-2">
        <div 
          className="absolute h-full bg-blue-500 rounded-full transition-all duration-100"
          style={{ width: `${(typed.length / SAMPLE_TEXT.length) * 100}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Press <span className="font-medium">Esc</span> to pause • <span className="font-medium">Ctrl+R</span> to restart
        </div>
        <div className="flex gap-4">
          <button 
            onClick={togglePause}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
          </button>
          <button 
            onClick={handleRestart}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>
      
      <input
        ref={inputRef}
        type="text"
        className="opacity-0 absolute -z-10"
        value={typed}
        onChange={handleTyping}
        autoFocus
      />
    </div>
  );
};

export default TypingTest;