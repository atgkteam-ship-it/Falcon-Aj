import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function GlassCard({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111111cc',
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1f1f1f',
    marginBottom: 16,
  },
});
