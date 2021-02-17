import React, { Component } from 'react'
import axio from 'axios'

class HttpAxio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    componentDidMount() {
        axio.get('https://my-json-server.typicode.com/typicode/demo/posts')
            .then(response => {
                console.log(response)
                this.setState({posts:response.data})
            })
            .catch(error => {
            console.log(error)
        })
    }
    render() {
        const {posts} = this.state
        return (
            <div>
                Lists Of Posts
                {
                    posts.length ?
                        posts.map(post =>
                            <div key={post.id}>
                                {post.title}</div>):null
                                }
            </div>
        )
    }
}

export default HttpAxio
