import React,{useState, useEffect} from 'react'

function Useffect5() {
    const [count, setCount] = useState(0) 
    
    /*
     const tick = () => {  
        setCount(count +1)

         1st methd u must give dependecies[count],if not give count num not increace.
      useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
},[count])

    Without give depencies, still count num is incresce. Look at 2nd method
   
    }*/

    const tick = () => {  
        setCount(Prevcount =>Prevcount +1)
    } //when using PrevCount no need to write depencies [] in the useEffect

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
},[])

    return (
        <div>
            {count}
        </div>
    )
}

export default Useffect5
