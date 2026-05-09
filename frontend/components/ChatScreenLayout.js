import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ChatScreenLayout({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    paddingHorizontal: 18,
    paddingTop: 55,
  },
});
