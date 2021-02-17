import React from 'react'
import { withRouter, Redirect, Route, NavLink } from "react-router-dom";
//import Home from './Home'
import Submit from './Submit'
import Form from './Form'

const style = {
    form:{
        textAlign:"center",
        padding:"10px"
    }
}

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state ={
                name:'',
                email:'',
                password:'',
                cnfpwd:'',
                tempDetails:[],
                status:false
            }
    }
   
 
    handleSubmit = (val) => {
       
        this.setState({tempDetails:{...this.state.tempDetails,val}})
        this.setState({ status: true  })
       this.props.history.push('Home');
        
      
        
}
    render(
        
    ){
        return(
            <div style={style.form} >
                
                {!this.state.status && <Form item={this.state} handleSubmit={this.handleSubmit}/>}
                {this.state.status && <Submit item={this.state.tempDetails} />}    
            </div>
           
            
        )
    }
}

export default withRouter (Main)