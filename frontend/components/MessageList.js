import React from 'react';
import { FlatList } from 'react-native';
import AnimatedMessageBubble from './AnimatedMessageBubble';

export default function MessageList({ messages }) {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <AnimatedMessageBubble
          message={item.text}
          isUser={item.role === 'user'}
        />
      )}
    />
  );
}
