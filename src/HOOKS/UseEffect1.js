import React,{useState, useEffect} from 'react'

function UseEffect() {
    const [Count, setCount] = useState(0)
    const [name, setName] = useState(' ')

    useEffect(() => {
        console.log('UseEffect - Updating Doc Title')
        document.title = `You clicked ${Count} times`
    }, [Count])
    
    //specify second parameter while using useEffect in array [Count]. That effect is runs second parameter accodingly.
    //But values are not changedd in rendered method.
    //effect only changing. When click the button that time count will be added.
    //When user is typing smthg at the time not rendered I mean not effected anything in the console.
    //Bcz,we wrote conditional method in the array[Count] after count nothing will be rendered.


    const addCount = () => {
        setCount(Count + 1)
    }
    return (
        <div>
            <input type='text' value={name} 
                onChange={e => setName(e.target.value)} />
            <button onClick={addCount}><h2>Click {Count} Times</h2></button> 
        </div>
    )
}

export default UseEffect
