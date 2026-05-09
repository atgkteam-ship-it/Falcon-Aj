import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AIStatusBadge({ status = 'Online' }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#132a13',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#4ade80',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
