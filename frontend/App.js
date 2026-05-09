import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 60 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>
        Falcon AI
      </Text>

      <ScrollView style={{ flex: 1, padding: 20 }}>
        <View style={{ backgroundColor: '#f1f1f1', padding: 15, borderRadius: 15, marginBottom: 10 }}>
          <Text>Hello 👋 I am Falcon AI</Text>
        </View>
      </ScrollView>

      <View style={{ flexDirection: 'row', padding: 10, borderTopWidth: 1, borderColor: '#ddd' }}>
        <TextInput
          placeholder='Message Falcon AI...'
          style={{
            flex: 1,
            backgroundColor: '#f1f1f1',
            borderRadius: 30,
            paddingHorizontal: 20,
            height: 50
          }}
        />

        <TouchableOpacity
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
