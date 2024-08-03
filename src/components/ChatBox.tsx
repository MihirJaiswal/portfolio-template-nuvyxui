import React, { useState } from 'react';
import { PREDEFINED_QA } from '../../constant/index';

type Message = {
  type: 'user' | 'bot';
  text: string;
};

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');

  const handleQuestionClick = (question: string, answer: string) => {
    setMessages([...messages, { type: 'user', text: question }, { type: 'bot', text: answer }]);
  };

  const handleSend = () => {
    if (userInput.trim()) {
      const predefinedAnswer = PREDEFINED_QA.find((qa) => qa.question.toLowerCase() === userInput.toLowerCase());
      
      if (predefinedAnswer) {
        setMessages([...messages, { type: 'user', text: userInput }, { type: 'bot', text: predefinedAnswer.answer }]);
      } else {
        setMessages([...messages, { type: 'user', text: userInput }, { type: 'bot', text: "Sorry, I don't have an answer for that." }]);
      }
      
      setUserInput('');
    }
  };

  return (
    <div className="flex flex-col h-full relative chatbox">
      <div className="flex-grow overflow-y-auto p-2 space-y-2">
        {messages.length === 0 ? (
          <div>
            {PREDEFINED_QA.slice(0, 3).map((qa, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(qa.question, qa.answer)}
                className="block w-full text-left bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 p-2 rounded-lg mb-2 focus:outline-none text-xs"
              >
                {qa.question}
              </button>
            ))}
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 text-sm rounded-md ${
                message.type === 'user' ? 'bg-blue-100 dark:bg-blue-600 text-right' : 'bg-gray-100 dark:bg-gray-700'
              }`}
            >
              {message.text}
            </div>
          ))
        )}
      </div>

      <div className="p-2">
        <div className="mt-4 flex items-center border-t border-gray-300 dark:border-gray-700 pt-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-grow p-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm"
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-blue-500 text-white p-2 rounded-lg text-sm focus:outline-none hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
