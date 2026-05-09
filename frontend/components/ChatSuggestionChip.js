import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ChatSuggestionChip({ text }) {
  return (
    <TouchableOpacity style={styles.chip}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#151515',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
    marginRight: 10,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
