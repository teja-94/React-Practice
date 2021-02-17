import React, { Component } from 'react'

class RenderProps extends Component {
   
    render() {
        const { count,increm } = this.props;
        return (
            <div>
                <button onClick={increm}>Clicked {count} Times  </button>
            </div>
        )
    }
}

export default RenderProps
