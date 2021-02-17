import React, { Component } from 'react'

class RenderProps2 extends Component {
    
    render() {
        const { count,increm } = this.props;
        return (
            <div>
                <h2 onMouseOver={increm}>Hover {count} Times  </h2>
            </div>
        )
    }
}

export default RenderProps2
