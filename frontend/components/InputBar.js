import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function InputBar({ message, setMessage, sendMessage }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#eee',
        alignItems: 'center'
      }}
    >
      <TouchableOpacity style={{ marginRight: 10 }}>
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

      <TouchableOpacity style={{ marginLeft: 10 }}>
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
  );
}
