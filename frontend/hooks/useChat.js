import { useState } from 'react';

export default function useChat() {
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([
    {
      text: 'Hello 👋 I am Falcon AI',
      isUser: false
    }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      text: message,
      isUser: true
    };

    const aiMessage = {
      text: 'Falcon AI is thinking...',
      isUser: false
    };

    setMessages([...messages, userMessage, aiMessage]);
    setMessage('');
  };

  return {
    message,
    setMessage,
    messages,
    sendMessage
  };
}
