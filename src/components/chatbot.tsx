"use client";

import React, {useState} from 'react';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, `User: ${input}`]);
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, `AI: Processing "${input}"...`]);
      }, 500);
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, "AI: I am a basic bot, so can't answer your question."]);
      }, 1500);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-0 right-0 w-96 bg-white border rounded-md shadow-lg flex flex-col h-96">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">AI Chatbot</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            {message}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            className="flex-1 border rounded-l-md p-2 focus:outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
          />
          <button
            className="bg-primary text-primary-foreground rounded-r-md p-2 hover:bg-primary/80"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
