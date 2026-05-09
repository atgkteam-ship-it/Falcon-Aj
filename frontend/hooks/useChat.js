import { useState } from 'react';
import { getGeminiReply } from '../services/geminiService';

export default function useChat() {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'Hello 👋 I am Falcon AI',
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      role: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const reply = await getGeminiReply(text);

    const aiMessage = {
      role: 'ai',
      text: reply,
    };

    setMessages((prev) => [...prev, aiMessage]);
    setLoading(false);
  };

  return {
    messages,
    loading,
    sendMessage,
  };
}
