import React from 'react';
import { ScrollView } from 'react-native';
import ChatScreenLayout from '../components/ChatScreenLayout';
import NotificationCard from '../components/NotificationCard';

export default function NotificationScreen(){
return(
<ChatScreenLayout>
<ScrollView>
<NotificationCard title='Falcon AI updated successfully'/>
<NotificationCard title='New AI features available'/>
</ScrollView>
</ChatScreenLayout>
)}