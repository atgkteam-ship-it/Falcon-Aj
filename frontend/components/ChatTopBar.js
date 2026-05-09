import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatTopBar(){
return(
<View style={styles.container}>
<Text style={styles.title}>Falcon AI</Text>
</View>
)}

const styles=StyleSheet.create({
container:{marginBottom:20},
title:{color:'#fff',fontSize:28,fontWeight:'bold'}
});