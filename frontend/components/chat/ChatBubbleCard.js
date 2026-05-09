import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatBubbleCard({ message, isUser=false }) {
  return (
    <View style={[styles.container, isUser ? styles.user : styles.ai]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{padding:14,borderRadius:18,maxWidth:'85%',marginBottom:12},
  user:{backgroundColor:'#2563eb',alignSelf:'flex-end'},
  ai:{backgroundColor:'#151515',alignSelf:'flex-start'},
  text:{color:'#fff',fontSize:15,lineHeight:22}
});