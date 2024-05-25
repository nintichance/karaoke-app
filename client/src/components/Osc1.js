import React from 'react'

function Osc1({changeFreq, freq}) {
    return (
        <div>
            <input 
                value = {freq}
                min="100"
                max="5000"
                onChange={changeFreq}
                type="range" 
                id="frequency"
            />
        </div>
    )
}

export default Osc1