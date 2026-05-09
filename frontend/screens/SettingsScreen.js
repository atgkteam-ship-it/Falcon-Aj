import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ChatScreenLayout from '../components/ChatScreenLayout';
import SectionTitle from '../components/SectionTitle';
import SettingsCard from '../components/SettingsCard';

export default function SettingsScreen() {
  return (
    <ChatScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionTitle title='Settings' />

        <SettingsCard title='Account' />
        <SettingsCard title='Appearance' />
        <SettingsCard title='Voice Settings' />
        <SettingsCard title='Privacy' />
      </ScrollView>
    </ChatScreenLayout>
  );
}

const styles = StyleSheet.create({});
