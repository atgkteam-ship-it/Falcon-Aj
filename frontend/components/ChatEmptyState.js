import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatEmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Falcon AI</Text>
      <Text style={styles.subtitle}>
        Ask anything. Generate ideas, code, content and more.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    color: '#888',
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 16,
  },
});
