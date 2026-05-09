import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ChatScrollButton(){
return(
<TouchableOpacity style={styles.button}>
<Text style={styles.text}>↓</Text>
</TouchableOpacity>
)}

const styles=StyleSheet.create({
button:{position:'absolute',bottom:90,right:20,width:44,height:44,borderRadius:22,backgroundColor:'#2563eb',justifyContent:'center',alignItems:'center'},
text:{color:'#fff',fontSize:20,fontWeight:'bold'}
});