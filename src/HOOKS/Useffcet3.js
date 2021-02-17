import React,{useState, useEffect} from 'react'

function UseEffect() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(' ')

    const logMouse = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
}

    useEffect(() => {
        console.log('UseEffect - Updating Doc Title')
       window.addEventListener('mousemove', logMouse)
    
        return () => {
            console.log('Component Unmount')
            window.removeEventListener('mousemove', logMouse)
        }
    }, [])
    
   
    return (
        <div>
           Hooks X -{X} Y-{Y}
        </div>
    )
}

export default UseEffect
