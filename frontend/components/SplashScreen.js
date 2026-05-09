import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Falcon AI</Text>
      <Text style={styles.subtitle}>Initializing AI Systems...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#4da3ff',
    fontSize: 42,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#888',
    marginTop: 10,
    fontSize: 16,
  },
});
