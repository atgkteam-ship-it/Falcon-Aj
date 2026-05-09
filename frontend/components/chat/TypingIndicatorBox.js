import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TypingIndicatorBox(){
return(
<View style={styles.container}>
<Text style={styles.text}>Falcon AI is typing...</Text>
</View>
)}

const styles=StyleSheet.create({
container:{backgroundColor:'#151515',padding:14,borderRadius:18,alignSelf:'flex-start',marginBottom:12},
text:{color:'#4da3ff',fontWeight:'600'}
});