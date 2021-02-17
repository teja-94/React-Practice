import React, { Component } from 'react'

const withCounter = (WrappedComponent, increNum) => {
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
       }
       incre = () => {
           this.setState(prevState =>{
             return {count: prevState.count+increNum}
           })
       }
        
        render() {
            return <WrappedComponent
                count={this.state.count}
                incre={this.incre}
                {...this.props}/>
        }
    }
    return WithCounter
}
export default withCounter;
