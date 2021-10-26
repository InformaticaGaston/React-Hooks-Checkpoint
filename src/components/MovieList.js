import React ,{useContext} from 'react'
import {MoviesContext} from '../MoviesContext'
import Movie from './Movie'
import { Link } from 'react-router-dom'

const MovieList = ({name}) => {
const [movies] = useContext(MoviesContext)
    return (
        <div>
        <div className='movie-list'>
            {
                movies.filter(movie=>movie.movieName.toLowerCase().includes(name.toLowerCase())).map(movie=>(
                    <Movie url={movie.url} 
                    movieName={movie.movieName}
                    rate={movie.rate}
                    description={movie.description}
                    key={movie.id}
                    />
                ))
            }
            
        </div><div className='add-container'>
            <h4>To Add a Movie</h4>
            <Link exact to='/AddMovie'><button className='click-btn'>Click Here</button></Link>
            </div>
            </div>
    )
}

export default MovieList
