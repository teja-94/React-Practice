import React from 'react'

function FunctionClick() {
    function clickHandle() {
        console.log('Button Clicked')
    
}

    return (
        <div>
            
            <button onClick={clickHandle}>Function Click</button>
        </div>
    )
}//don't add the parathasis clickHandle()

export default FunctionClick
