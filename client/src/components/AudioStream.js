import React, { useRef, useState } from 'react'
const AudioStreamer = ({audioCtx, osc1}) => {
  const mediaStream = useRef(null)
  const startStreaming = async () => {
    osc1.start()
    osc1.stop()
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        { audio: true }
      )
      mediaStream.current = stream
     
      const source = new MediaStreamAudioSourceNode(audioCtx, {
        mediaStream: stream,
      })

      // let gain1 = audioCtx.createGain()
      let out = audioCtx.destination
      source.connect(out)
      // gain1.connect(out)
      console.log("It got here")
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }
  const stopStreaming = () => {
    if (mediaStream.current){
      mediaStream.current.getTracks().forEach((track)=>{
        console.log("got it")
        track.stop()
      })
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
