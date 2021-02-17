
/*import React,{ Component }  from 'react';
//import StyleRoot  from 'react';
import './App.css';
import { Form, Input } from 'antd';
import { Redirect } from "react-router";
import { Link, useHistory, auth } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Person from './components/Home';

const state = {
    persons:[
        { username:String },
        { password:String  },
        { confirmpassword:String },
        { email:String }
        ],
 
      otherState: 'some other value',
      showPersons: false
}


class App extends Component{
    

    onFinish = values => {
      
        alert('Succuss');
        console.log('USER DATA:',values)
    };
     nameChangedHandler = ( event, username ) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.username === username;
      });
  
      const person = {
        ...this.state.persons[personIndex]
      };
  
      // const person = Object.assign({}, this.state.persons[personIndex]);
  
    person.username = event.target.value;
    person.email = event.target.value;
    person.password = event.target.value;
    person.password = event.target.value;
  
      const persons = [...this.state.persons];
      persons[personIndex] = person;
  
      this.setState( {persons: persons} );
    }
  
   /* deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }*/
  
  /*  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState( { showPersons: !doesShow } );
    }
  
    render () {
      const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
          cursor: 'pointer',
         ':hover':{
              backgroundColor: 'yellow',
              color: 'black'
          } 
      }
  
        let persons = null;
    
  
      if ( this.state.showPersons ) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
          </div>
          );
          style.backgroundColor = 'red';
         style[':hover']= {
            backgroundColor: ' lightgreen',
            color: 'black'
        };
      }
      const classes = [];
      if (this.state.persons.length <= 2) {
          classes.push('red');
      }
          
      if (this.state.persons.length <= 1) {
          classes.push('bold');
      }
      return (
        <Form
        name="normal_login"
        className="login-form"
            initialValues={{email: "", password: "",username:"",confirmpassword:"",
          remember: true,
        }}
        onFinish={onFinish}
        >
            
            
              {/* Username */
            /*<Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
            > 
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            
  
            
              {/* Email */
          /*  <Form.Item
          name="email"
          
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E--mail" />
        </Form.Item>
  
  
              {/* Password */
      /*  <Form.Item
          name="password"
         
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password"/>
        </Form.Item>
  
        <Form.Item
          name="confirm"
          
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password"/>
        </Form.Item>
          
  
        <Form.Item>
        <button  style={style}
            onClick={this.togglePersonsHandler}>Submit</button>
               
             
            </Form.Item>
      </Form>
    );
  };
 
















/* <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
         {persons}
        </div>
        </div>
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
  }
  
</div>*/
                  
                  
/*class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}
export default NameForm;

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }
  
    _onButtonClick() {
        this.setState({
            showComponent: true,
         
          
      });
    }
  
    render() {
      return (
          <div>
            <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              
          <Button onClick={this._onButtonClick}>Button</Button>
          {this.state.showComponent ?
           <NewComponent /> :
           null
        }
        </div>
      );
    }
}
export default MyComponent;



class ChangeInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };
    }

    changeText(event) {
      this.setState({
          name: event.target.value
       
    });
  }

  render() {
     return (
       <div>
         <label htmlFor="name">Enter Text here </label>
             <input type="text" id="name" />
         <Button type="submit" onChange={this.changeText.bind(this) }>Submit
         <h3>{this.state.name}</h3></Button> 
       </div>
     );
  }
}

export default ChangeInput;
*/
