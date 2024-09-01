import React, { useState } from 'react';

const ReadAloud = ({ text }) => {
  const [speaking, setSpeaking] = useState(false);

  const handleReadAloud = () => {
    if (speaking) {
      // Stop the speech synthesis
      window.speechSynthesis.cancel();
      setSpeaking(false);
    } else {
      // Create a new SpeechSynthesisUtterance instance
      const utterance = new SpeechSynthesisUtterance(text);

      // Optional: Set voice and other properties
      const voices = window.speechSynthesis.getVoices();
      // For example, you can select a specific voice if you have one in mind
      // utterance.voice = voices.find(voice => voice.name === 'Google UK English Male');

      // Start speaking
      window.speechSynthesis.speak(utterance);
      setSpeaking(true);

      // Update state when speaking ends
      utterance.onend = () => setSpeaking(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleReadAloud}
      aria-label={speaking ? "Stop Reading" : "Read Aloud"}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '10px'
      }}
    >
      {speaking ? '🔇' : '🔊'}
    </button>
  );
};

export default ReadAloud;
