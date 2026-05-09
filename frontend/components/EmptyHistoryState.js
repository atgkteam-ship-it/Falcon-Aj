import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmptyHistoryState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Chat History</Text>
      <Text style={styles.subtitle}>Your previous Falcon AI chats will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#777',
    textAlign: 'center',
    lineHeight: 22,
  },
});
