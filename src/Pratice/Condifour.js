import React, { Component } from 'react'

// CONDITIONAL APPROCH SHORTCIRCUTE APPROCH
// It is the best way to approch Conditional Operator and Short Circute
class CondiFour extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLogged: true
        }
    }
    
    render() {
      //left hand side of the operator if it is true...it will evalute and print Login ayiena. if it is false not evalute.it doen't effect value.
        
        return this.state.isLogged && <div>Login Ayiena</div>

    }
}

export default CondiFour
