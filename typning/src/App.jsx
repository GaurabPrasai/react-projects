import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Pause, Play, RotateCcw } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const SAMPLE_TEXT = `What good are prayers and shrines to a person mad with love? The flame keeps gnawing into her tender marrow hour by hour, and deep in her heart the silent wound lives on.`;

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
                    <span key={uuidv4()} className="relative">
                      {index === typed.length && (
                        <span className="absolute -left-0.5 w-0.5 h-full transition-transform animate-blink">
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
