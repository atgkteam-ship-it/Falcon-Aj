import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function VoiceButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.icon}>🎤</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    fontSize: 22,
    color: '#fff',
  },
});
