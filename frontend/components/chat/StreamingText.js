import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function StreamingText({ text='' }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text:{color:'#fff',fontSize:16,lineHeight:24}
});