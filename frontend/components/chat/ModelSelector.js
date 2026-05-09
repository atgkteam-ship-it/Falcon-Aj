import React from 'react';
import { ScrollView } from 'react-native';
import ModelSelectorChip from '../ModelSelectorChip';

export default function ModelSelector(){
return(
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
<ModelSelectorChip title='Gemini Pro' active />
<ModelSelectorChip title='Gemini Flash' />
<ModelSelectorChip title='Falcon Smart' />
</ScrollView>
)}