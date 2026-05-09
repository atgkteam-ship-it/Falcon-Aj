import React from 'react';
import { ScrollView } from 'react-native';
import ChatScreenLayout from '../components/ChatScreenLayout';
import SectionTitle from '../components/SectionTitle';
import QuickActionCard from '../components/QuickActionCard';

export default function ExploreScreen() {
  return (
    <ChatScreenLayout>
      <SectionTitle title='Explore AI Tools' />

      <ScrollView showsVerticalScrollIndicator={false}>
        <QuickActionCard title='Generate Images' />
        <QuickActionCard title='Write Content' />
        <QuickActionCard title='Code Assistant' />
        <QuickActionCard title='AI Business Ideas' />
      </ScrollView>
    </ChatScreenLayout>
  );
}
