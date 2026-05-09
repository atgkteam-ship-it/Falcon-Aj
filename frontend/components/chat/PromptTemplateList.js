import React from 'react';
import { ScrollView } from 'react-native';
import ChatSuggestionChip from '../ChatSuggestionChip';

export default function PromptTemplateList(){
return(
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
<ChatSuggestionChip text='Write caption' />
<ChatSuggestionChip text='Generate business idea' />
<ChatSuggestionChip text='Create AI logo prompt' />
</ScrollView>
)}