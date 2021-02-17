import React,{useState} from 'react'

function SetStateArrays() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id: items.lenght,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add A Number</button>
            <ul>
                {items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SetStateArrays
