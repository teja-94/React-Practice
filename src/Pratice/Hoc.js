import React, { Component } from 'react'
import withCounter from './withCounter'


class Hoc extends Component {

  
    render() {
        
        const {count, incre} = this.props
        return (
            <div>
                <h1 onMouseOver={incre}> {this.props.name} Hower  {count} times</h1>
            </div>
        )
    }
}

export default withCounter(Hoc,10)
