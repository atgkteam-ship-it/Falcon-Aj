import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AILoadingState() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Falcon AI processing...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    padding: 14,
    borderRadius: 18,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  text: {
    color: '#4da3ff',
    fontWeight: '600',
  },
});
