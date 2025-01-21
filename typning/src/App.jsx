import React from 'react';
import { Card, CardContent } from './components/ui/card';

const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-2xl font-bold flex items-center">
          <span className="text-black">Type</span>
          <span className="text-blue-500">Book</span>
        </div>
        
        <div className="flex gap-8">
          <div className="text-center">
            <div className="text-2xl font-semibold">45</div>
            <div className="text-sm text-gray-500">WPM</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-semibold">98.5</div>
            <div className="text-sm text-gray-500">ACC %</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-semibold">2:30</div>
            <div className="text-sm text-gray-500">TIME</div>
          </div>
        </div>
      </div>

      {/* Book Information */}
      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-2">Currently reading</div>
        <h1 className="text-2xl font-bold mb-1">Les Misérables</h1>
        <div className="text-gray-600">by Victor Hugo</div>
      </div>

      {/* Typing Area */}
      <Card className="mb-4 size-222">
        <CardContent className="p-6">
          <div className="text-lg leading-relaxed text-gray-300">
            The evening sun cast long shadows across the streets of Paris,
          </div>
          <div className="text-lg leading-relaxed">
            as Monsieur Valjean walked quietly through
          </div>
          <div className="text-lg leading-relaxed text-gray-300">
            the gathering dusk.
          </div>
          <div className="text-lg leading-relaxed text-gray-300">
            His thoughts were heavy with the weight of his past,
          </div>
        </CardContent>
      </Card>

      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div className="absolute h-full w-2/5 bg-blue-500 rounded-full"></div>
      </div>

      {/* Controls */}
      <div className="text-sm text-gray-500 mt-2">
        Press <span className="font-medium">Esc</span> to pause • <span className="font-medium">Ctrl+R</span> to restart
      </div>
    </div>
  );
};

export default App;