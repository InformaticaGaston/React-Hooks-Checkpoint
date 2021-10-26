import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import {MoviesContext} from '../MoviesContext'

const AddMovieForm = () => {
    const [movies, setMovies] = useContext(MoviesContext)
    const [name , setName] = useState("")
    const [description, setDescription]=useState('')
    const [image , setImage] = useState("")
    const [rating , setRating] = useState('')
    
    const addfilm =()=>{
        return setMovies([...movies ,{url:image , 
            movieName : name ,
            description:description,
            rate : rating ,
            id : Math.random()}])
      }
    const handleSave=()=>{
        addfilm()
        setImage("")
        setName("")
        setRating('')
        }
    return (
        <form>
        <h5 className='labels'>Enter the URL of the image :</h5 >
        <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}  />
        <h5 className='labels' >Enter the name of the movie :</h5>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <h5 className='labels'>Enter the description :</h5>
        <input type="text"  value={description} onChange={(e)=>setDescription(e.target.value)}  />
        <h5 className='labels'>Enter the rating :</h5>
        <input type="text" value={rating} onChange={(e)=>setRating(e.target.value)}/>
        <div className="form-btns"> 
        <Link exact to='/'>
        <button className='cs-btn close-btn'>Close</button>
        </Link>
        <button className='cs-btn' onClick={handleSave}>Save</button>
        </div>   
        </form>
    )
}

export default AddMovieForm
