import React, { Component } from 'react'

class LyfCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Kid'
        }
        console.log('LyfCycle B Constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LyfCycle B getDervied');
        return null
    
    }
    componentDidMount() {
        console.log('Lycle B CDidMount');
       
    }
    shouldComponentUpdate() {
        console.log('Lyf B ShouldCUpdate')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('Lyc B Snapshot')
        return null
    }
    componentDidUpdate() {
        console.log('Lyc B DidUpdate')
    }
    render() {
    console.log('Lycycle B Render');
        return (
            <div>
                <h1>LyfCycleB Methods</h1>
            </div>
        )
    }
}

export default LyfCycleB
