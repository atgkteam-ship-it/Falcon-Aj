import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function AppDivider(){
return <View style={styles.divider}/>;
}

const styles=StyleSheet.create({
divider:{height:1,backgroundColor:'#1f1f1f',marginVertical:16}
});