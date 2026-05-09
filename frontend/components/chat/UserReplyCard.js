import React from 'react';
import ChatBubbleCard from './ChatBubbleCard';

export default function UserReplyCard({ message }) {
  return <ChatBubbleCard message={message} isUser />;
}