import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FloatingInputBar() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Ask Falcon AI...'
        placeholderTextColor='#777'
        style={styles.input}
      />

      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendText}>➤</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  sendBtn: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#4da3ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
