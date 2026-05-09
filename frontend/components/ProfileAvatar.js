import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileAvatar({ letter = 'A' }) {
  return (
    <View style={styles.avatar}>
      <Text style={styles.text}>{letter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 50,
    backgroundColor: '#4da3ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
