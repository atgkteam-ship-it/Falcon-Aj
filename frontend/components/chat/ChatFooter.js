import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatFooter(){
return(
<View style={styles.container}>
<Text style={styles.text}>Powered by Falcon AI</Text>
</View>
)}

const styles=StyleSheet.create({
container:{paddingVertical:16,alignItems:'center'},
text:{color:'#666',fontSize:12}
});