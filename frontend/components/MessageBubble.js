import React from 'react';
import { View, Text } from 'react-native';

export default function MessageBubble({ message, isUser }) {
  return (
    <View
      style={{
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        backgroundColor: isUser ? '#000' : '#f1f1f1',
        padding: 14,
        borderRadius: 16,
        marginVertical: 6,
        maxWidth: '80%'
      }}
    >
      <Text style={{ color: isUser ? '#fff' : '#000' }}>
        {message}
      </Text>
    </View>
  );
}
