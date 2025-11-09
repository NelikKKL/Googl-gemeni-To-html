
import React from 'react';
import { Message, Role } from '../types';
import { UserIcon, BotIcon } from './icons';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === Role.USER;

  const wrapperClasses = isUser ? 'justify-end' : 'justify-start';
  const bubbleClasses = isUser ? 'bg-cyan-600 rounded-br-none' : 'bg-gray-700 rounded-bl-none';
  const icon = isUser ? <UserIcon className="w-8 h-8 text-gray-400" /> : <BotIcon className="w-8 h-8 text-cyan-400" />;
  const orderClasses = isUser ? 'order-2' : 'order-1';

  return (
    <div className={`flex items-start gap-3 my-4 ${wrapperClasses}`}>
      {!isUser && <div className="flex-shrink-0">{icon}</div>}
      <div className={`flex flex-col max-w-lg ${orderClasses}`}>
        <div className={`px-4 py-3 rounded-2xl ${bubbleClasses}`}>
          <p className="text-white whitespace-pre-wrap">{message.text}</p>
        </div>
      </div>
      {isUser && <div className="flex-shrink-0 order-2">{icon}</div>}
    </div>
  );
};

export default ChatMessage;
