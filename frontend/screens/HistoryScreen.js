import React from 'react';
import { ScrollView } from 'react-native';
import ChatScreenLayout from '../components/ChatScreenLayout';
import SectionTitle from '../components/SectionTitle';
import ConversationCard from '../components/ConversationCard';

export default function HistoryScreen() {
  return (
    <ChatScreenLayout>
      <SectionTitle title='Chat History' />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ConversationCard title='How to make AI app?' />
        <ConversationCard title='Best startup ideas' />
        <ConversationCard title='Create logo design' />
      </ScrollView>
    </ChatScreenLayout>
  );
}
