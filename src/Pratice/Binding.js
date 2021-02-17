import React, { Component } from 'react'

class Binding extends Component {
   
   constructor(props) {
       super(props)
   
       this.state = {
           message: 'Hello'
       }
      // this.clickHandler=this.clickHandler.bind(this). 3rd approch
   }
  // clickHandler() {
     //  this.setState({
       // message: 'Bye Bye.!'
       // })
          
      // }
 
    clickHandler = () => {
        this.setState({
            message: 'Bye Bye.!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>Bind It</button> 
                <button onClick={() => this.clickHandler()}>Bind It</button> this will use in the render method 
                3r approch === Best Option to use
                <button onClick={this.clickHandler}>Bind It</button> 
                it is tthe binding class constructor
                .(  this.clickHandler=this.clickHandler.bind(this)) 
                 4th approch === it is also use.
                  clickHandler = () => {
                    this.setState({
                     message: 'Bye Bye.!'
                     })
                }
                    {this.clickHandler} 
                    this is the class property as arrow function*/}

                <button onClick={this.clickHandler}>Bind It</button> 
                
            </div>
        )
    }
}

export default Binding
