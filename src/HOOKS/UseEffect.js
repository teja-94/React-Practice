import React,{useState, useEffect} from 'react'

function UseEffect() {
    const [Count, setCount] = useState(0)

    useEffect(() => {
        document.title= `You clicked ${Count} times`
    })
    const addCount = () => {
        setCount(Count + 1)
    }
    return (
        <div>
            <button onClick={addCount}><h2>Click {Count} Times</h2></button> 
        </div>
    )
}

export default UseEffect
