import React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#f1f1f1'
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold'
        }}
      >
        Falcon AI
      </Text>

      <Text
        style={{
          marginTop: 4,
          color: '#666'
        }}
      >
        Your personal AI assistant
      </Text>
    </View>
  );
}
