import './App.scss';

let actx = new AudioContext()
let out = actx.destination
let osc1 = actx.createOscillator()
let gain1 = actx.createGain()

osc1.connect(gain1)
gain1.connect(out)
function App() {
  return (
    <div className="App">
      <h1>Sliders</h1>
      <button onClick={()=> osc1.start()}>start</button>
      <button onClick={()=> osc1.stop()}>stop</button>
    </div>
  )
}

export default App;
