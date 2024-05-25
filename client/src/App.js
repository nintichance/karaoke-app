import './App.scss';
import React, { useState } from "react"
import Osc1 from './components/Osc1';
import AudioRecorder from './components/AudioInput';

let actx = new AudioContext()
let out = actx.destination
let osc1 = actx.createOscillator()
let gain1 = actx.createGain()

osc1.connect(gain1)
gain1.connect(out)


function App() {


  const [osc1Freq, setOsc1Freq] = useState([])
  const changeOsc1Freq = (e) => {
    console.log(e.target.value)
    let { value } = e.target
    setOsc1Freq(value)
    osc1.frequency.value = value
  }

  
  return (
    <div className="App">
      <h1>Sliders</h1>
      <audio></audio>
      <button onClick={()=> osc1.start()}>start</button>
      <button onClick={()=> osc1.stop()}>stop</button>
      <Osc1 changeFreq={changeOsc1Freq} freq={osc1Freq}/>
      <AudioRecorder/>

    </div>
  )
}

export default App;
