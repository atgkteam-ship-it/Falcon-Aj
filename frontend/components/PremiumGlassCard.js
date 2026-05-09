import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function PremiumGlassCard({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#121212',
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1f1f1f',
    marginBottom: 14,
  },
});