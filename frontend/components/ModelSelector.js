import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ModelSelector() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.activeModel}>
        <Text style={styles.activeText}>Gemini Pro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.modelBtn}>
        <Text style={styles.modelText}>Falcon Fast</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  activeModel: {
    backgroundColor: '#4da3ff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    marginRight: 10,
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modelBtn: {
    backgroundColor: '#151515',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
  },
  modelText: {
    color: '#aaa',
    fontWeight: '600',
  },
});
