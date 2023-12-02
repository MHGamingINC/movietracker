/** Container to store all individual movies. */

import Movie from './Movie';

// Map over MovieList object to create individual movie entries
const MovieList = ({movieList}) => 
{
    return (
        <div>
            {movieList.map(movie => {
               return (
                   <Movie movie={movie} />
               )
           })}
        </div>
    );
};

export default MovieList;