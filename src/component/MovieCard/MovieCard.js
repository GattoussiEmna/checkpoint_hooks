import React from "react";



const MovieCard =({movie})=>{
    return(

        <div className="movie">
      <h2 className="title">{movie.title}</h2>
<div className="MyCard">
<img
width={200}
 src={movie.posterUrl} />
</div>
<p>({movie.year})</p>
<h4>{"⭐".repeat(movie.rating)} </h4>
</div>
    );
};
export default MovieCard