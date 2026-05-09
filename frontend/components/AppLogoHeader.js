import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppLogoHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🦅</Text>
      <Text style={styles.title}>Falcon AI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  icon: {
    fontSize: 32,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
