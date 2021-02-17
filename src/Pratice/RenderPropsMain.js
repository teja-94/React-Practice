import React, { Component } from 'react'

class RenderPropsMain extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
    }
     increm = () => {
         this.setState(prevState => {
            return {count:prevState.count + 1}
        })
    }
    render() {
        return (
            <div>
             {this.props.render(this.state.count,this.increm)}
            </div>
        )
    }
}

export default RenderPropsMain
