import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ChatScreenLayout from '../components/ChatScreenLayout';
import FloatingActionButton from '../components/FloatingActionButton';

export default function NewChatScreen(){
return(
<ChatScreenLayout>
<Text style={styles.title}>Start New Chat</Text>
<FloatingActionButton/>
</ChatScreenLayout>
)}

const styles=StyleSheet.create({
title:{color:'#fff',fontSize:30,fontWeight:'bold'}
});