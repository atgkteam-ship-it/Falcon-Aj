import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function QuickActionCard({ title }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
