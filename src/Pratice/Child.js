import React from 'react'

function Child(parentData) {
    return (
        <div>
            <button onClick={()=>parentData.greetPar('Teja')}>Greet Parent</button>
        </div>
    )
}

export default Child
