import './App.scss';
import Osc1 from './components/Osc1';

let actx = new AudioContext()
let out = actx.destination
let osc1 = actx.createOscillator()
let gain1 = actx.createGain()

osc1.connect(gain1)
gain1.connect(out)
function App() {

  const changeOsc1Freq = (e) => {
    console.log(e.target.value)
    let { value } = e.target
    osc1.frequency.value = value
  }
  
  return (
    <div className="App">
      <h1>Sliders</h1>
      <button onClick={()=> osc1.start()}>start</button>
      <button onClick={()=> osc1.stop()}>stop</button>
      <Osc1 changeFreq={changeOsc1Freq}/>

    </div>
  )
}

export default App;
