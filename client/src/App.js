import './App.css';
import React, { useState } from "react"
import Osc1 from './components/Osc1';
import AudioStreamer from './components/AudioStream';




function App() {

  const audioCtx = new AudioContext()
  let out = audioCtx.destination
  let osc1 = audioCtx.createOscillator()
  // let gain1 = audioCtx.createGain()

  // osc1.connect(gain1)
  // gain1.connect(out)
  // const [osc1Freq, setOsc1Freq] = useState([])
  // const changeOsc1Freq = (e) => {
  //   console.log(e.target.value)
  //   let { value } = e.target
  //   setOsc1Freq(value)
  //   osc1.frequency.value = value
  // }

  
  return (
    <div className="App">
      <h1>Sliders</h1>
      <audio></audio>
      {/* <button onClick={()=> osc1.start()}>start</button>
      <button onClick={()=> osc1.stop()}>stop</button> */}
      {/* <Osc1 changeFreq={changeOsc1Freq} freq={osc1Freq}/> */}
      <AudioStreamer audioCtx={audioCtx} osc1={osc1} out={out}/>

    </div>
  )
}

export default App;
