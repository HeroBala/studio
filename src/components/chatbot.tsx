"use client";

import React, {useState, useEffect, useRef} from 'react';
import {Button} from '@/components/ui/button';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const chatboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, `User: ${input}`]);
      // Simulate AI response using setTimeout (replace with actual API integration)
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, `AI: Processing "${input}"...`]);
      }, 500);
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, "AI: I am a basic bot, so can't answer your question yet."]);
      }, 1500);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-background border rounded-md shadow-lg flex flex-col h-96 z-50">
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="text-lg font-semibold">AI Chatbot</h3>
      </div>
      <div ref={chatboxRef} className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((message, index) => (
          <div key={index} className="text-sm">
            {message}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            className="flex-1 border rounded-l-md p-2 focus:outline-none text-sm"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
          />
          <Button
            className="bg-primary text-primary-foreground rounded-r-md p-2 hover:bg-primary/80 text-sm"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
