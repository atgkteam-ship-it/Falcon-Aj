import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AIThinkingLoader(){
return(
<View style={styles.container}>
<Text style={styles.text}>Falcon AI thinking...</Text>
</View>
)}

const styles=StyleSheet.create({
container:{backgroundColor:'#151515',padding:14,borderRadius:18,alignSelf:'flex-start'},
text:{color:'#4da3ff',fontWeight:'600'}
});