import React, { Component } from 'react'

class Classclick extends Component {
    clickHandler() {
        console.log('User Clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Classclick</button>
            </div>
        )
    }
}

export default Classclick
