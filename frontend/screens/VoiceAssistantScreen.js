import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ChatScreenLayout from '../components/ChatScreenLayout';
import VoiceWaveAnimation from '../components/VoiceWaveAnimation';

export default function VoiceAssistantScreen(){
return(
<ChatScreenLayout>
<Text style={styles.title}>Voice Assistant</Text>
<VoiceWaveAnimation/>
</ChatScreenLayout>
)}

const styles=StyleSheet.create({
title:{color:'#fff',fontSize:28,fontWeight:'bold'}
});