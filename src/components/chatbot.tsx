"use client";

import React, {useState, useEffect, useRef} from 'react';
import {Button} from '@/components/ui/button';
//import {trainChatbot} from '@/ai/flows/train-chatbot-flow';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  //const [isTraining, setIsTraining] = useState(false);
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

  //const handleTrainChatbot = async () => {
  //  setIsTraining(true);
  //  try {
  //    // Replace with your actual webpage URL
  //    const trainingResult = await trainChatbot({webpageUrl: 'https://ai-insight-hub.web.app/'});
  //    setMessages(prevMessages => [...prevMessages, `AI: Training initiated...`]);
  //    if (trainingResult.success) {
  //      setMessages(prevMessages => [...prevMessages, `AI: Chatbot trained successfully. ${trainingResult.message}`]);
  //    } else {
  //      setMessages(prevMessages => [...prevMessages, `AI: Chatbot training failed: ${trainingResult.message}`]);
  //    }
  //  } catch (error: any) {
  //    console.error('Error training chatbot:', error);
  //    setMessages(prevMessages => [...prevMessages, `AI: Error training chatbot: ${error.message}`]);
  //  } finally {
  //    setIsTraining(false);
  //  }
  //};

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
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
          {/*<Button
            onClick={handleTrainChatbot}
            disabled={isTraining}
            className="w-full"
          >
            {isTraining ? 'Training...' : 'Train Chatbot'}
          </Button>*/}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
