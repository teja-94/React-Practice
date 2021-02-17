import React, { Component } from 'react'

// CONDITIONAL APPROCH Ternary APPROCH/ Conditional Operator
// It is the best way to approch Conditional Operator and Short Curcite
class Condi3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:false
        }
    }
    
    render() {
      
        return (
            this.state.isLogged ?
                <div>Login Ayiena</div> :
                <div>Login Avvura Baiii</div>
        )
    
    }
}

export default Condi3 
