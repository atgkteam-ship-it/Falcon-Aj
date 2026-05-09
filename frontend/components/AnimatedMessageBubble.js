import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnimatedMessageBubble({ message, isUser }) {
  return (
    <View
      style={[
        styles.bubble,
        isUser ? styles.userBubble : styles.aiBubble,
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    padding: 16,
    borderRadius: 20,
    marginVertical: 8,
    maxWidth: '82%',
  },
  userBubble: {
    backgroundColor: '#4da3ff',
    alignSelf: 'flex-end',
  },
  aiBubble: {
    backgroundColor: '#151515',
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
  },
});
