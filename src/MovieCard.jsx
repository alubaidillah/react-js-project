import React from "react";
import defaultImage from './err.jpg';

const MovieCard = ({movie}) =>{
    return(
        <div className='movie'>
            <div>
              <p>{movie.Year}</p>
            </div>

            <div>
              <img 
                src={movie.Poster !== 'N/A' ? movie.Poster : './err.jpg'}
                alt={movie.Title}
                onError={(e) => {
                    e.target.src = defaultImage;
                    e.target.onerror = null;
                }}
              />
            </div>

            <div>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;