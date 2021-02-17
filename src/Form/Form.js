import React from 'react'



 
 class Form extends React.Component{
   
    constructor(props){
        super(props)
        this.state ={
                name:'',
                email:'',
                password:'',
                cnfpwd:''
            }
        }
        
    render(){
        return(
            <div>
                <label>Enter Name </label><br />
                <input type="text" placeholder="Enetr Your Name"  onChange={(e) => {this.setState({name:e.target.value})}} /><br />
                <label>Enter Email </label><br />
                <input type="email" placeholder="Enetr Your Email"  onChange={(e) => {this.setState({email:e.target.value})}}/><br />
                <label>Enter Password </label><br />
                <input type="password" placeholder="Enetr Password" onChange={(e) => {this.setState({password:e.target.value})}}/><br />
                <label>Confirm Password </label><br />
                <input type="password" placeholder="Confirm Password"  onChange={(e) => {this.setState({cnfpwd:e.target.value})}}/>
                <div>
                    <button onClick={() => {this.props.handleSubmit(this.state)}}> Submit </button>
               
                    {/* <button onClick={() => {this.handleSubmit()}}> <Link to="/submit">Submit</Link></button> 
                     <button onClick={() => {this.props.handleSubmit(this.state)> Submit </button>*/}
                    {/* <Submit item={this.state.tempDetails} /> */}

                   
                </div> 
            </div>
        )
    }
}
export default Form;