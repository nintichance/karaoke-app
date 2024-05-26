import React, { useRef, useState } from 'react';
const AudioStreamer = ({audioCtx}) => {
  const [recordedUrl, setRecordedUrl] = useState('');
  const mediaStream = useRef(null);
  const chunks = useRef([]);
  const startStreaming = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        { audio: true }
      );
      mediaStream.current = stream;
     
      const source = new MediaStreamAudioSourceNode(audioCtx, {
        mediaStream: stream,
      });

      let gain1 = audioCtx.createGain()
      let out = audioCtx.destination
      source.connect(gain1)
      gain1.connect(out)
      console.log("It got here")
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };
  return (
    <div>
      <audio controls src={recordedUrl} />
      <button onClick={startStreaming}>Start Streaming</button>
    </div>
  );
};
export default AudioStreamer;
