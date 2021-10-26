import React from 'react'

const Movie = ({url, movieName, rate, description, key}) => {
    return (
        <div className='movie'>
            <img src={url} alt="" />
            <h3>{movieName}</h3>
            <div className='rating'>
            <p>{rate}</p>
            <i class="fas fa-star"></i>
            </div>
            <p>{description}</p>
            
            </div>
    )
}

export default Movie
