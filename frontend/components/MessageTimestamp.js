import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function MessageTimestamp({ time }) {
  return <Text style={styles.text}>{time}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },
});
