
import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Chat } from '@google/genai';
import { startChat } from './services/geminiService';
import { Message, Role } from './types';
import Header from './components/Header';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import LoadingIndicator from './components/LoadingIndicator';

function App() {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const initializeChat = useCallback(() => {
    try {
      const newChat = startChat();
      setChat(newChat);
      setMessages([]);
      setError(null);
    } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError("An unknown error occurred during initialization.");
        }
    }
  }, []);

  useEffect(() => {
    initializeChat();
  }, [initializeChat]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (userInput: string) => {
    if (!chat) return;

    const userMessage: Message = { role: Role.USER, text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await chat.sendMessage({ message: userInput });
      const modelMessage: Message = { role: Role.MODEL, text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Error getting response from Gemini. Please try again. Details: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen font-sans">
      <Header onNewChat={initializeChat} />
      <main className="flex-1 overflow-y-auto p-4 pt-24 pb-24">
        <div className="max-w-4xl mx-auto">
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg my-4">
              <strong>Error:</strong> {error}
            </div>
          )}
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          {isLoading && <LoadingIndicator />}
          <div ref={chatEndRef} />
        </div>
      </main>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;
