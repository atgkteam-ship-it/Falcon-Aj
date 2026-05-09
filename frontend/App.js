import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MessageBubble from './components/MessageBubble';

export default function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      text: 'Hello 👋 I am Falcon AI',
      isUser: false
    }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      text: message,
      isUser: true
    };

    const aiMessage = {
      text: 'Falcon AI is thinking...',
      isUser: false
    };

    setMessages([...messages, userMessage, aiMessage]);
    setMessage('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 60 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 10
        }}
      >
        Falcon AI
      </Text>

      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            message={msg.text}
            isUser={msg.isUser}
          />
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          borderTopWidth: 1,
          borderColor: '#eee',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          style={{ marginRight: 10 }}
        >
          <Text style={{ fontSize: 24 }}>📎</Text>
        </TouchableOpacity>

        <TextInput
          placeholder='Message Falcon AI...'
          value={message}
          onChangeText={setMessage}
          style={{
            flex: 1,
            backgroundColor: '#f1f1f1',
            borderRadius: 30,
            paddingHorizontal: 20,
            height: 50
          }}
        />

        <TouchableOpacity
          style={{ marginLeft: 10 }}
        >
          <Text style={{ fontSize: 24 }}>🎤</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={sendMessage}
          style={{
            marginLeft: 10,
            backgroundColor: '#000',
            borderRadius: 30,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
