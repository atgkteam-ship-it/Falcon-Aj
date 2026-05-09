import React from 'react';
import { View, Text } from 'react-native';

export default function ModelSelector() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingBottom: 10
      }}
    >
      <View
        style={{
          backgroundColor: '#f1f1f1',
          padding: 12,
          borderRadius: 14
        }}
      >
        <Text style={{ fontWeight: '600' }}>
          Model: Gemini Flash ⚡
        </Text>
      </View>
    </View>
  );
}
