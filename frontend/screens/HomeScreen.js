import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Falcon AI</Text>

      <Text style={styles.subtitle}>
        Your futuristic AI assistant
      </Text>

      <ScrollView style={styles.chatArea}>
        <View style={styles.aiBox}>
          <Text style={styles.aiText}>
            Hello Aarish 👋{'\n'}
            Welcome to Falcon AI.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TextInput
          placeholder='Ask anything...'
          placeholderTextColor='#777'
          style={styles.input}
        />

        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.sendText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  logo: {
    color: '#4da3ff',
    fontSize: 38,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#888',
    marginTop: 5,
    marginBottom: 20,
    fontSize: 16,
  },

  chatArea: {
    flex: 1,
  },

  aiBox: {
    backgroundColor: '#111',
    padding: 18,
    borderRadius: 18,
  },

  aiText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 25,
  },

  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },

  input: {
    flex: 1,
    backgroundColor: '#111',
    color: 'white',
    borderRadius: 18,
    paddingHorizontal: 15,
    height: 55,
  },

  sendBtn: {
    width: 55,
    height: 55,
    backgroundColor: '#4da3ff',
    marginLeft: 10,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
