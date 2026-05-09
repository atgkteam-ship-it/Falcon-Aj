import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TypingIndicator() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Falcon AI is typing...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: '#888',
    fontSize: 14,
  },
});
