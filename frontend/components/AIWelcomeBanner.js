import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AIWelcomeBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Falcon AI</Text>
      <Text style={styles.subtitle}>
        Your premium AI assistant powered by Gemini.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#888',
    marginTop: 8,
    lineHeight: 24,
    fontSize: 16,
  },
});
