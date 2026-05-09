import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TypingIndicator(){
return(
<View style={styles.container}>
<Text style={styles.text}>Falcon AI is typing...</Text>
</View>
)}

const styles=StyleSheet.create({
container:{padding:12,borderRadius:16,backgroundColor:'#171717',alignSelf:'flex-start'},
text:{color:'#4da3ff',fontSize:14,fontWeight:'600'}
});