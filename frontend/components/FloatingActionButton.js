import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FloatingActionButton(){
return(
<TouchableOpacity style={styles.button}>
<Text style={styles.text}>+</Text>
</TouchableOpacity>
)}

const styles=StyleSheet.create({
button:{position:'absolute',bottom:30,right:20,width:60,height:60,borderRadius:30,backgroundColor:'#4da3ff',justifyContent:'center',alignItems:'center'},
text:{color:'#fff',fontSize:30,fontWeight:'bold'}
});