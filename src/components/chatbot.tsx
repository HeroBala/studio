"use client";

import React, {useState, useEffect, useRef} from 'react';
import {Button} from '@/components/ui/button';
import {X, MessageSquare} from "lucide-react";
import {cn} from "@/lib/utils";
import {Card, CardContent} from "@/components/ui/card";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const chatboxRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleCloseChatbot = () => {
    setIsOpen(false);
  };

  const handleOpenChatbot = () => {
    setIsOpen(true);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Icon - Always Visible */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button variant="secondary" onClick={handleOpenChatbot} aria-label="Open Chatbot" className="flex items-center gap-2 shadow-md">
          <MessageSquare className="h-5 w-5"/>
          Your Bot
        </Button>
      </div>

      {/* Chatbot Overlay - Visible when isOpen is true */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-72 bg-card border rounded-lg shadow-lg flex flex-col h-96 z-50 animate-fade-in">
          <div className="p-4 border-b flex items-center justify-between bg-secondary text-secondary-foreground">
            <h3 className="text-lg font-semibold">Your Bot</h3>
            <Button variant="ghost" size="icon" onClick={handleCloseChatbot} aria-label="Close Chatbot">
              <X className="h-4 w-4"/>
            </Button>
          </div>
          <Card>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-2">
              <div ref={chatboxRef}>
                {messages.map((message, index) => (
                  <div key={index} className="text-sm">
                    {message}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="p-4 border-t">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 border rounded-l-md p-2 focus:outline-none text-sm"
                  placeholder="Type your message..."
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
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
        </div>
      )}
    </>
  );
};

export default Chatbot;

