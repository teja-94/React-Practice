import React, { useState } from 'react'
import Useffect3 from './Useffcet3'

function UseEffect() {
    const [display,setDisplay] = useState(true)
    
const disMethod = () => {
        setDisplay(!display)
    }
   
    return (
        <div>
          <button onClick={disMethod}>Toggle Button</button>
        {display && <Useffect3 />}
        </div>
    )
}

export default UseEffect
