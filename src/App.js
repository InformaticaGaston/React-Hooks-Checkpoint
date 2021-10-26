import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MovieList from './components/MovieList';
import {MoviesProvider} from './MoviesContext'
import AddMovieForm from './components/AddMovieForm';
import {useState} from 'react'

function App() {
  const [name , setName] = useState("")
  const searchHandler =() => { 
    

  }
  return (
    <Router>
    <div>  
    <MoviesProvider>
    <Navbar name={name} setName={setName}/>
    <Switch>
    <Route exact path='/'><MovieList name={name}/></Route> 
    <Route path='/AddMovie'><AddMovieForm/></Route>
    </Switch>
    </MoviesProvider>
    </div>
    </Router>
  );
}

export default App;
