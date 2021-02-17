import React,{useState, useEffect} from 'react'
import axois from 'axios'



function DataFecthing() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFormButton, setIdFromButton] = useState(1)
    
    const handleClick = () => {
        setIdFromButton(id)
    }
    
    useEffect(() => {
   axois.get(`https://jsonplaceholder.typicode.com/posts/${idFormButton}`)
       .then(res => {
           console.log(res)
           setPost(res.data)
        })
       .catch(err => {
            console.log(err)
        })
        
    }, [idFormButton])
    

    return (
        <div>
            
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fecth Data</button>
            <h1>{post.title}</h1>
            { /*<ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default DataFecthing
