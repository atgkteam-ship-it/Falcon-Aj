import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function VoiceWaveAnimation() {
  return <View style={styles.wave} />;
}

const styles = StyleSheet.create({
  wave:{height:40,borderRadius:20,backgroundColor:'#4da3ff',marginVertical:12}
});