import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatHeader(){
return(
<View style={styles.container}>
<Text style={styles.title}>Falcon AI</Text>
<Text style={styles.subtitle}>Premium AI Assistant</Text>
</View>
)}

const styles=StyleSheet.create({
container:{marginBottom:20},
title:{color:'#fff',fontSize:30,fontWeight:'bold'},
subtitle:{color:'#777',marginTop:4}
});