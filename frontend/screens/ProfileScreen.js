import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatScreenLayout from '../components/ChatScreenLayout';
import ProfileAvatar from '../components/ProfileAvatar';

export default function ProfileScreen() {
  return (
    <ChatScreenLayout>
      <View style={styles.container}>
        <ProfileAvatar letter='A' />

        <Text style={styles.name}>Aarish</Text>
        <Text style={styles.email}>falconai@example.com</Text>
      </View>
    </ChatScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 18,
  },
  email: {
    color: '#888',
    marginTop: 6,
  },
});
