const {
    BrowserRouter, 
    Link, 
    Route,
    Switch
  } = ReactRouterDOM;
  const Router = BrowserRouter;
  
  // App
  class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        movie: {
          title: null,
          rating: null
        }
      };
      this.setMovie = this.setMovie.bind(this);
    }
    setMovie(payload) {
      this.setState({
        movie: {
          title: payload.title,
          rating: payload.rating
        }
      });
    }
    render(){
      return(
      <Router>
        <div className="container">
          <Layout>
            <Switch>
              <Route path="/select-movie" component={ () => <Home set={this.setMovie} movie={this.state.movie} />}  /> 
              <Route path="/movie-info" component={()=><MovieInfo movie={this.state.movie}/>} /> 
            </Switch>
          </Layout>
        </div>
      </Router>
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