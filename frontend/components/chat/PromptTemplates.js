import React from 'react';
import { ScrollView } from 'react-native';
import ChatSuggestionChip from '../ChatSuggestionChip';

export default function PromptTemplates(){
return(
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
<ChatSuggestionChip text='Create YouTube title' />
<ChatSuggestionChip text='Generate AI prompt' />
<ChatSuggestionChip text='Write Instagram caption' />
</ScrollView>
)}