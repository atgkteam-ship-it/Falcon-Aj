import React from 'react';
import { View, Text } from 'react-native';

export default function TypingIndicator() {
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        backgroundColor: '#f1f1f1',
        padding: 14,
        borderRadius: 16,
        marginVertical: 6,
        maxWidth: '80%'
      }}
    >
      <Text>Falcon AI is typing...</Text>
    </View>
  );
}
