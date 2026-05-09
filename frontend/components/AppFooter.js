import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppFooter(){
return(
<View style={styles.container}>
<Text style={styles.text}>Powered by Falcon AI</Text>
</View>
)}

const styles=StyleSheet.create({
container:{paddingVertical:20,alignItems:'center'},
text:{color:'#666',fontSize:13}
});