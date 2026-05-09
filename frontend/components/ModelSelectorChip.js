import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ModelSelectorChip({ title='Gemini Pro', active=true }){
return(
<TouchableOpacity style={[styles.chip,active&&styles.active]}>
<Text style={styles.text}>{title}</Text>
</TouchableOpacity>
)}

const styles=StyleSheet.create({
chip:{paddingHorizontal:14,paddingVertical:8,borderRadius:18,backgroundColor:'#111',marginRight:10},
active:{backgroundColor:'#2563eb'},
text:{color:'#fff',fontWeight:'600'}
});