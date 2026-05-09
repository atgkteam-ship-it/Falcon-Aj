import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ChatInputBox(){
return(
<View style={styles.container}>
<TextInput
placeholder='Ask Falcon AI...'
placeholderTextColor='#777'
style={styles.input}
/>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Send</Text>
</TouchableOpacity>
</View>
)}

const styles=StyleSheet.create({
container:{flexDirection:'row',alignItems:'center',backgroundColor:'#111',borderRadius:24,paddingHorizontal:14,paddingVertical:10},
input:{flex:1,color:'#fff',fontSize:16},
button:{marginLeft:10,backgroundColor:'#2563eb',paddingHorizontal:16,paddingVertical:10,borderRadius:16},
buttonText:{color:'#fff',fontWeight:'bold'}
});