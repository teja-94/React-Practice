const {
    BrowserRouter, 
    Link, 
    Route,
    Switch
} .ReactRouterDOM;
  

  const Router = BrowserRouter;
  
  // App
  class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        user: {
         username: null,
              email: null,
              password: null,
          confirmpassword:null,
        }
      };
      this.setUser = this.setUser.bind(this);
    }
    setUser(props) {
        this.setState({
            user: {
                username: props.username,
                     email: props.email,
                     password: props.password,
                 confirmpassword:props.confirmpassword
       
                }
            });
      }
      const redirectHandler = (props) => {
        console.log("heloo")
        setState({
           
            redirect: true,
        
           
           
        })
       const renderRedirect = () => {
        alert('error')
        };
       
    }
        const renderRedirect = () => {
         
        if (state.redirect) {
            return <Redirect to={{pathname: '/'}}/>
        }
        }
    render(){
      return(
        <Form
      name="normal_login"
      className="login-form"
          initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      >
          
          
            {/* Username */}
          <Form.Item
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
          

          
            {/* Email */}
          <Form.Item
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


            {/* Password */}
      <Form.Item
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
      <button onClick={redirectHandler}>Submit</button>
              {renderRedirect()}
           
          </Form.Item>
    </Form>
  );
};
      )
    }
  }
  
  // Layout
  const Layout = ({children}) => (
    <div>
      <header>
        <h1>Movie App</h1>
      </header>
      <nav>
        <Link to="/select-movie">Select Movie</Link>
        <Link to="/movie-info">Movie Info</Link>
      </nav>
      <section>
        {children}
      </section>
    </div>
  )
  
  // Home Component
  const Home = ({set, movie}) => (
    <div>
      <Movie title="Star Wars VIII: The Last Jedi (2017)" rating={5} set={set} selected={movie} />
      <Movie title="Star Wars VII: The Force Awakens (2015)" rating={5} set={set} selected={movie} />
    </div>
  )
  
  // Movie Component for displaying movies
  // User can select the movie
  const Movie = ({title, rating, set, selected}) => {
    const selectMovie = () => {
      set({
        title: title,
        rating: rating
      });
    }
    return (
      <div className={selected.title === title ? 'active' : ''}>
        <h1>{title}</h1>
        <div>
          {Array(rating).fill(1).map(() =>
          <span>★</span>
          )}
        </div>
        <button onClick={selectMovie}>Select</button>
      </div>
    )
  }
  
  // Movie Info
  // You must select a movie before movie information is shown
  const MovieInfo = ({movie}) => {
    
    const {
      title,
      rating
    } = movie;
    
    // No Movie is selected
    if ( movie.title === null ) {
      return <div>Please Select a Movie</div>
    }
    
    // Movie has been selected
    return (
      <div>
        <h1>Selected Movie</h1>
        {title}
        {Array(rating).fill(1).map(() =>
          <span>★</span>
        )}
      </div>
    )
    
  }
  
  ReactDOM.render(<App />,document.getElementById('app'));