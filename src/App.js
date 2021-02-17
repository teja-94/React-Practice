import React,{Component} from 'react'

import { BrowserRouter as Router, Route, withRouter ,History,Redirect, Switch, HashRouter,RedirectAuthenticated, BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Form/Main'
import AntForm from './Form/AntForm'
//import Registration from './components/registration';
//import Form from './User'
//import Home from './components/Home'
//import Formal from './components/Form-Sec/Form'
//import { useHistory } from "react-router-dom";
//import Count from './Pratice/Count'
//import Click from './Pratice/FunctionClick'
//import CClick from './Pratice/Classclick'
//import Binding from './Pratice/Binding'
//import Parent from './Pratice/Parent'
import Usereduce from './HOOKS/useRedDataFetch2'
import Share from './Share'

//import Condi1 from './Pratice/UserGreet'
//import Condi2 from './Pratice/ConditTwo'
//import Condi3 from './Pratice/Condithree'
//import Condi4 from './Pratice/Condifour'
//import FormHand from './Pratice/FormHandling'
//import LyfCycle from './Pratice/LyfCycle'
//import Table from './Pratice/Table'
//import PureC from './Pratice/PureComp'
//import ParentPureC from './Pratice/ParentPure'
//import Reff from './Pratice/ClickCounthoc'
//import Hover from './Pratice/Hoc'
//import ClickRenderProps from './Pratice/RenderProps'
//import HoverRenderProps from './Pratice/RenderProps2'
//import User from './Pratice/RenderPropsMain'
//import CompoC from './Pratice/ComponentC'
//import { UserProvider } from './Pratice/userContext';

// <User render={(count, increm) => (<ClickRenderProps count={count} increm={increm} /> )}/>
//<User render={(count,increm)=>(<HoverRenderProps count={count} increm={increm}  />)}/>
//<Registration /> 
//<Count />
//<Click />
    //<CClick />
    //<Binding /> <FormHand />
    //<Parent />
    //   <UserProvider value='Tiger Kid'>    
    //<CompoC />      
    //</UserProvider> 
    
{/*export const UserContext = React.createContext()
 export const ChannelContext = React.createContext() 
 <UserContext.Provider value={'Tiger Kid'}>
                        <ChannelContext.Provider value={'Teju 143'}>
                                    
                                <UseConst1 />
                        
                            </ChannelContext.Provider>
                     </UserContext.Provider>
*/}

function App() {
   
    return (
        <div>
           
            <BrowserRouter>
            <Router>
                <div className="App">
                       
                <Switch>
                          
                    <Router>
                   
                    <Share />
                                
                    </Router>
               
                          
                           
   
                </Switch>


                    </div>
                 
                
                </Router>
                
            </BrowserRouter>
        </div>
    );
}

export default App;










/*import React,{Component} from 'react'

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Registration from './components/registration';
import Pro from './Pro'
import User from './components/User'




//<Registration />
function App(props) {
  return (
      <div>
    <Router> 
    <div className="App">
                <Switch>
  
        
                <Pro />
            </Switch>
         </div>
    </Router>
    </div>
  );
}

export default App;



import React, { Component } from "react";
import { render } from "react-dom";
import FormDemo from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    this.setState({ values })
  }

  render() {
    const { values } = this.state;

    return (
      <div>
        <h2>Passing function to the child component</h2>
        <hr />
        <FormDemo 
          onFormSubmit={this.submitForm}
        /> <hr/>
        <div>
          Submitted form values : <br/>
          First name: {values && values.fname} <br/>
          Last name: {values && values.lname}
        </div>
      </div>
    );
  }
}


export default App




*/