import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatWelcomeBanner(){
return(
<View style={styles.container}>
<Text style={styles.title}>Welcome Back</Text>
<Text style={styles.subtitle}>Start chatting with Falcon AI</Text>
</View>
)}

const styles=StyleSheet.create({
container:{marginBottom:24},
title:{color:'#fff',fontSize:26,fontWeight:'bold'},
subtitle:{color:'#777',marginTop:6,fontSize:15}
});