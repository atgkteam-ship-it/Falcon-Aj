import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnimatedLogo(){
return(
<View style={styles.container}>
<Text style={styles.logo}>🦅</Text>
</View>
)}

const styles=StyleSheet.create({
container:{alignItems:'center',justifyContent:'center',marginVertical:20},
logo:{fontSize:64,color:'#fff'}
});