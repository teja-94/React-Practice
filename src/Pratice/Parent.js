import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
    
     constructor(props) {
         super(props)
     
         this.state = {
              parentName:'Parent'
         }
         this.greetParent= this.greetParent.bind(this)
     }
     
     
     greetParent(childData) {
        alert(`Hello ${this.state.parentName} from ${childData}` )
    }
     
     render() {
        return (
            <div>
                <Child greetPar={this.greetParent} />
            </div>
        )
    }
}

export default Parent
