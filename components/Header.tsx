
import React from 'react';
import { BotIcon, NewChatIcon } from './icons';

interface HeaderProps {
  onNewChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewChat }) => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm p-4 border-b border-gray-700 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center gap-3">
        <BotIcon className="w-8 h-8 text-cyan-400" />
        <h1 className="text-xl font-bold text-gray-100">Gemini Chat Interface</h1>
      </div>
      <button
        onClick={onNewChat}
        className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-colors duration-200"
      >
        <NewChatIcon />
        New Chat
      </button>
    </header>
  );
};

export default Header;
