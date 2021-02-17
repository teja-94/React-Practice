import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, HashRouter,Link, BrowserRouter } from 'react-router-dom';
// import { DataContext } from './Main'
import Home from '../components/Home'


const style={
    form:{
        border:'2px solid red',
        fontFamily:'cursive'
    }
}
export default class Submit extends React.Component{
 

    constructor(props){
        super(props)
   
    }
    render() {
        alert('Succuss')
        console.log('USER DATA:',this.props)
        const tempDetails = this.props
    return(
        <div style={style.form}>
            <p><strong>Name:</strong>{tempDetails.item.val.name}</p>
            <p><strong>Email:</strong>{tempDetails.item.val.email}</p>
            <p><strong>Password:</strong>{tempDetails.item.val.password}</p>
            <p><strong>Confirm Password:</strong>{tempDetails.item.val.password}</p>
        </div>
    )
}
}