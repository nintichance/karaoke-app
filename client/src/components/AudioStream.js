import React, { useRef, useState } from 'react'
const AudioStreamer = ({audioCtx, osc1, out}) => {
  const mediaStream = useRef(null)
  let source = useRef(null)
  const startStreaming = async () => {
    osc1.start()
    osc1.stop()
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        { audio: true }
      )
      mediaStream.current = stream
     
      source = new MediaStreamAudioSourceNode(audioCtx, {
        mediaStream: stream,
      })

      source.connect(out)
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }
  const stopStreaming = () => {
    if (mediaStream.current){
      source.disconnect(out)
    }
    
  }
  return (
    <div>
      <button onClick={startStreaming}>Start Streaming</button>
      <button onClick={stopStreaming}>Stop Streaming</button>
    </div>
  )
}
export default AudioStreamer
