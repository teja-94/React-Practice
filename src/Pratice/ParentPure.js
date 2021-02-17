import React, { Component } from 'react'
//import Regc from './RegularComp'
//import PureC from './PureComp'
import Memo from './memo'

class ParentPure extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Tiger'
         }
     }
    componentDidMount() {
         setInterval(() => {
             this.setState({
                 name: 'Tiger'
             })
         }, 2000);
     }
    render() {
        console.log('Parent Component')
        return (
            <div>
                Parent Comp
                {/*<Regc name={this.state.name} />
                <PureC name={this.state.name} */} 
                <Memo name={this.state.name} />
            </div>
        )
    }
}

export default ParentPure
