import React, { Component } from 'react'
import LyfcycleB from './LyfcycleB'

class LyfCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Tiger Kid'
        }
        console.log('LyfCycle A Constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LyfCycle A getDervied');
        return null
    
    }
    componentDidMount() {
        console.log('Lycle A CDidMount');
       
    }
    shouldComponentUpdate() {
        console.log('LyfA ShouldCUpdate')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('LycA Snapshot')
        return null
    }
    componentDidUpdate() {
        console.log('LycA DidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'Tiger Kid of Pulivendula'
        })
    }
    render() {
    console.log('Lycycle A Render');
        return (
            <div>
                <h1>LyfCycle Methods</h1>
                <button onClick={this.changeState}>Change State</button>
                <LyfcycleB />
            </div>
          
        )
    }
}

export default LyfCycle
