import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ChatHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Falcon AI</Text>
        <Text style={styles.subtitle}>Gemini Pro Model</Text>
      </View>

      <TouchableOpacity style={styles.profileBtn}>
        <Text style={styles.profileText}>A</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#888',
    marginTop: 4,
  },
  profileBtn: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#4da3ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
