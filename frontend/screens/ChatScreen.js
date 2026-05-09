import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../components/Header';
import ModelSelector from '../components/ModelSelector';
import MessageBubble from '../components/MessageBubble';
import TypingIndicator from '../components/TypingIndicator';
import InputBar from '../components/InputBar';

export default function ChatScreen({ messages, message, setMessage, sendMessage }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 60 }}>
      <Header />

      <ModelSelector />

      <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            message={msg.text}
            isUser={msg.isUser}
          />
        ))}

        <TypingIndicator />
      </ScrollView>

      <InputBar
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </View>
  );
}
