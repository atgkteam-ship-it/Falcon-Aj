import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ChatBackgroundGlow(){
return <View style={styles.glow}/>;
}

const styles=StyleSheet.create({
glow:{position:'absolute',top:-120,left:-80,width:260,height:260,borderRadius:130,backgroundColor:'#2563eb22'}
});