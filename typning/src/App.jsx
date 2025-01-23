import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Pause, Play, RotateCcw } from "lucide-react";

const SAMPLE_TEXT = `The evening sun cast long shadows across the streets of Paris, as Monsieur Valjean walked quietly through the gathering dusk. His thoughts were heavy with the weight of his past, and the path ahead seemed uncertain in the fading light. The cobblestones echoed with each careful step, a reminder of his journey's beginning. Years of hardship had taught him to move with caution, to blend into the shadows that now stretched like long fingers across the ancient city walls. The sound of distant bells rang through the evening air, calling the faithful to vespers. Valjean paused, letting the familiar melody wash over him. Each toll seemed to speak of redemption, of the promise he had made so many years ago in the bishop's house. The silver candlesticks, now safely hidden away, were a constant reminder of that transformative moment. As he continued his way through the narrow streets, the scent of fresh bread wafted from a nearby bakery. It reminded him of simpler times, of the nineteen years spent in Toulon, where such simple pleasures were nothing more than distant dreams.`;

const App = () => {
  const [typed, setTyped] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const handleTyping = (e) => {
    if (isFinished) return;

    const newTyped = e.target.value;
    setTyped(newTyped);

    if (newTyped.length === SAMPLE_TEXT.length) {
      setIsFinished(true);
    }
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
            <div className="text-2xl font-semibold">0</div>
            <div className="text-sm text-gray-500">WPM</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-semibold">100</div>
            <div className="text-sm text-gray-500">ACC %</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-semibold">0:00</div>
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
        <CardContent className="p-7 relative">
          <div
            className="max-w-5xl mx-auto h-48 overflow-y-auto hide-scrollbar"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              "::WebkitScrollbar": { display: "none" },
            }}
          >
            <div className="text-xl leading-relaxed relative">
              {SAMPLE_TEXT.split("").map((char, index) => {
                const isTyped = index < typed.length;
                const isCorrect = typed[index] === char;

                return (
                  <>
                    <span key={typed[index]} className="relative">
                      {index === typed.length && (
                        <span className="absolute -left-0.5 w-0.5 h-full animate-blink">
                          |
                        </span>
                      )}
                    </span>
                    <span
                      key={index}
                      className={`cursor-text ${
                        isTyped
                          ? isCorrect
                            ? "text-black"
                            : "text-red-500 bg-red-100"
                          : "text-gray-400"
                      }`}
                    >
                      {char}
                    </span>
                  </>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="relative h-2 bg-gray-200 rounded-full mb-2">
        <div
          className="absolute h-full bg-blue-500 rounded-full transition-all duration-100"
          style={{ width: "0%" }}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Press <span className="font-medium">Esc</span> to pause •{" "}
          <span className="font-medium">Ctrl+R</span> to restart
        </div>
        <div className="flex gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Play size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      <input
        type="text"
        className="opacity-0 absolute -z-10"
        autoFocus
        onChange={handleTyping}
      />
    </div>
  );
};

export default App;
