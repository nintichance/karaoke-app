import React, { useRef, useState } from 'react';
const AudioRecorder = () => {
  const mediaStream = useRef(null);
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        { audio: true }
      );
      mediaStream.current = stream;
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };
  return (
    <div>
      <button onClick={startRecording}>Start Recording</button>
    </div>
  );
};
export default AudioRecorder;