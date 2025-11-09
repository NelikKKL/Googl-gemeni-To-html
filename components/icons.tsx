
import React from 'react';

export const UserIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export const BotIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05.21.05.42.09.64.15 1.5.34 2.48 1.83 2.48 3.3v1.5h-3.01c-.69-1.42-2.14-2.48-3.82-2.87-.23-.05-.46-.09-.69-.13-.39-1.01-1.03-1.9-1.84-2.65-.85.3-1.76.45-2.7.45-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .34-.04.68-.12 1h1.43c.08-.32.12-.66.12-1 0-2.21-1.79-4-4-4S5 4.79 5 7s1.79 4 4 4c.34 0 .68-.04 1-.12v1.43c-.32-.08-.66-.12-1-.12-2.21 0-4 1.79-4 4s1.79 4 4 4c1.19 0 2.25-.52 2.97-1.33.9.72 2.02 1.24 3.23 1.52.2.04.4.08.6.12v1.69h3V16c0-1.82-1.3-3.39-3-3.87zM8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

export const NewChatIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z"/>
    </svg>
);
