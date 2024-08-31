import React, { useState, useEffect } from 'react';
import chatbot from '../../assets/chatbot.png';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Scroll to bottom when messages change
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (message) => {
    // Append the new message to the existing messages
    setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user', background: 'bg-green-200' }]);
    setInputValue(''); // Clear the input field after sending the message
    // Generate bot response (for demonstration purposes)
    setTimeout(() => {
      const botResponse = { text: generateBotResponse(message), sender: 'bot', background: 'bg-red-200' };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 500);
  };

  const generateBotResponse = (message) => {
    // Predefined responses for fixed questions
    const fixedQuestions = {
      'What services do you offer?': 'We offer a wide range of services including...',
      'How can I contact support?': 'You can contact our support team at support@example.com.',
      // Add more fixed questions and responses as needed
    };

    // If the user's message matches a fixed question, return the corresponding response
    if (fixedQuestions.hasOwnProperty(message)) {
      return fixedQuestions[message];
    }

    // If the user's message doesn't match any fixed question, generate a random response
    const responses = [
      "I'm just a demo chatbot. How can I assist you?",
      "Thank you for your message! How can I help you today?",
      "Sorry, I'm not very smart yet. Can you please provide more details?",
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  return (
    <div className="fixed bottom-6 right-10 m-4 z-40 flex flex-col items-end gap-6">
      {/* Chatbot UI */}
      {isOpen && (
        <div className="bg-blue-100 text-black shadow-md rounded-md p-2 w-64">
          {/* Chat messages */}
          <div id="chat-container" className={`overflow-y-auto ${isOpen ? 'h-64' : 'h-0'} `}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`text-sm ${message.sender === 'user' ? 'text-right' : 'text-left'} ${message.background} rounded-md p-1 m-1 `}
              >
                <p className="">{message.text}</p>
              </div>
            ))}
          </div>
          {/* Input field */}
          <div className="mt-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-2 py-1 border border-gray-900 rounded-md text-white focus:border-transparent"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(inputValue);
                }
              }}
            />
          </div>
        </div>
      )}

      {/* Chatbot icon */}
      <div className="relative">
        
        {isOpen ? (
          <IoChatboxEllipsesOutline className=" bg-yellow-400 text-[3.5rem] p-2 rounded-full"  onClick={() => setIsOpen(!isOpen)} />
        ):
        (<img src={chatbot} alt="Chatbot Icon" className="w-[3.5rem] cursor-pointer" onClick={() => setIsOpen(!isOpen)} />)
    }
      </div>
    </div>
  );
};

export default Chatbot;
