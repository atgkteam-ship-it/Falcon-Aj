import { useState } from 'react';

export default function useVoiceInput() {
  const [recording, setRecording] = useState(false);

  const startRecording = () => {
    setRecording(true);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  return {
    recording,
    startRecording,
    stopRecording,
  };
}
