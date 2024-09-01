import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceRecognitionInput = ({ setInputPrompt }) => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (listening) {
      setInputPrompt(transcript);
    } 
  }, [transcript, listening, setInputPrompt]);

  const isBrowserSupported = SpeechRecognition.browserSupportsSpeechRecognition();

  const handleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();  // Clear transcript before starting a new session
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  return (
    <>
      {!isBrowserSupported ? (
        <p>Your browser doesn't support speech recognition.</p>
      ) : (
        <button
          type="button"
          onClick={handleListening}
          aria-label="Start/Stop Voice Recognition"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'absolute',
            right: '50px',
            bottom: '10px'
          }}
        >
          {listening ? '🛑' : '🎤'}
        </button>
      )}
    </>
  );
};

export default VoiceRecognitionInput;
