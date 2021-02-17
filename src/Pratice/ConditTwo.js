import React, { Component } from 'react'

// CONDITIONAL APPROCH ELEMENT VARIABLE APPROCH
class Condi2  extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:false
        }
    }
    
    render() {
       let messy
        if (this.state.isLogged) {
          messy=<div><h1> Login Ayiena</h1></div>
 
        } else {
            messy=<div><h1>Oyee Login Avu</h1></div>
        }
        return <div>{messy}</div>
    
    }
}

export default Condi2
