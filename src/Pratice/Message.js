import React, { Component } from 'react'
class Messagee extends Component {
    constructor() {
        super()
        this.state = {
            message:'Hello Jhan'
        }
    }
    changeMessage() {
        this.setState({
            message:'Thank You for Subscribing.'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
               <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Messagee;