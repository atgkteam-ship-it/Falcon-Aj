import React from 'react';
import { View, StyleSheet } from 'react-native';
import FloatingInputBar from './FloatingInputBar';
import VoiceButton from './VoiceButton';
import ImageUploadButton from './ImageUploadButton';

export default function ChatInputArea() {
  return (
    <View style={styles.container}>
      <ImageUploadButton />
      <FloatingInputBar />
      <VoiceButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
