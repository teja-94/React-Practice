import React, { Component } from 'react'

 class FormHandling extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
             username: '',
             comments: '',
             topic : 'react'
         }
     }
     handleUsername = (event) => {
         this.setState({
             username: event.target.value
         })
     }

     handleComments = (event) => {
         this.setState({
             comments: event.target.value
         })
     }
     handleTopic = (event) => {
         this.setState({
             Topic:event.target.value
         })
     }
     handleSubmit = (event) => {
      
         alert(`${this.state.username} ${this.state.comments} 
    ${this.state.Topic}`)
         event.preventDefault();
      
     }

     render() {
         const { username, comments, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>

            <div>
                <label>Username</label> 
                <input type='text' value={username}
                onChange={this.handleUsername} />
                </div>
               
                <div>
                    <label>Comments</label> 
                    <textarea value={comments}
                    onChange={this.handleComments} />
                </div>

                <div>
                    <label>Topic</label> 
                    <select value={topic} onChange={this.handleTopic}>
                        <option value='react'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>      
                </div>
                <button type='submit'>Submit</button>
      
      
    
  </form>
            
          
        )
                 }
}

export default FormHandling
