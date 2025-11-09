
import React from 'react';
import { BotIcon } from './icons';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-3 my-4 justify-start">
        <div className="flex-shrink-0"><BotIcon className="w-8 h-8 text-cyan-400" /></div>
        <div className="flex items-center gap-2 bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-none">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-0"></span>
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></span>
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-400"></span>
        </div>
    </div>
  );
};

export default LoadingIndicator;
