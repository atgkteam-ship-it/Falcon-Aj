import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SettingsCard({ title }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111',
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
