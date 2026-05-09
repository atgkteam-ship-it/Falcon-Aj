import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotificationCard({ title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{backgroundColor:'#111',padding:16,borderRadius:18,marginBottom:12},
  text:{color:'#fff',fontSize:15,fontWeight:'600'}
});