import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmptyChatState(){
return(
<View style={styles.container}>
<Text style={styles.title}>Welcome to Falcon AI</Text>
<Text style={styles.subtitle}>Ask anything and start chatting with AI.</Text>
</View>
)}

const styles=StyleSheet.create({
container:{alignItems:'center',marginTop:120,paddingHorizontal:24},
title:{color:'#fff',fontSize:28,fontWeight:'bold',marginBottom:10},
subtitle:{color:'#777',fontSize:16,textAlign:'center',lineHeight:24}
});