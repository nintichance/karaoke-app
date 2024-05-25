import React from 'react'

function Osc1({changeFreq}) {
    return (
        <div>
            <input 
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