import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ChatActions(){
return(
<View style={styles.container}>
<TouchableOpacity style={styles.button}><Text style={styles.text}>Copy</Text></TouchableOpacity>
<TouchableOpacity style={styles.button}><Text style={styles.text}>Share</Text></TouchableOpacity>
</View>
)}

const styles=StyleSheet.create({
container:{flexDirection:'row',marginTop:10},
button:{backgroundColor:'#111',paddingHorizontal:14,paddingVertical:8,borderRadius:14,marginRight:10},
text:{color:'#fff',fontSize:13}
});