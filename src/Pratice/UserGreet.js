import React, { Component } from 'react'

//CONDITIONAL APPROCH IF/ELSE
class UserGreet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:true
        }
    }
    
    render() {
        if (this.state.isLogged) {
            return <div><h1> Login Ayiena</h1></div>
 
        } else {
            return <div><h1>Oyee Login Avu</h1></div>
        }
       
    
    }
}

export default UserGreet
