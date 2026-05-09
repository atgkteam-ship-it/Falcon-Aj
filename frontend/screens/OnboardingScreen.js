import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ChatScreenLayout from '../components/ChatScreenLayout';
import AnimatedLogo from '../components/AnimatedLogo';
import GradientButton from '../components/GradientButton';

export default function OnboardingScreen(){
return(
<ChatScreenLayout>
<AnimatedLogo/>
<Text style={styles.title}>Welcome to Falcon AI</Text>
<Text style={styles.subtitle}>Your futuristic AI assistant.</Text>
<GradientButton title='Get Started'/>
</ChatScreenLayout>
)}

const styles=StyleSheet.create({
title:{color:'#fff',fontSize:32,fontWeight:'bold',textAlign:'center'},
subtitle:{color:'#888',fontSize:16,textAlign:'center',marginTop:10,marginBottom:30}
});