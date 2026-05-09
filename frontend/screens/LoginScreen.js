import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Falcon AI</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <TouchableOpacity style={styles.googleBtn}>
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emailBtn}>
        <Text style={styles.emailText}>Continue with Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  title: {
    color: '#4da3ff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#888',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 40,
    fontSize: 16,
  },
  googleBtn: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
  },
  googleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#111',
  },
  emailBtn: {
    backgroundColor: '#1a1a1a',
    padding: 18,
    borderRadius: 18,
  },
  emailText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});
