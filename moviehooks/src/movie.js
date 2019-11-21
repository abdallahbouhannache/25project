import React, { Component, useState } from 'react';
import './css/movie.css'


const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


function movie({ movie }) {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    console.log(movie);
    return (
        <div className="singlemoviewrp">
            <span className="moviename">{movie.Title}</span>
            <img className="moviepic" src={movie.Poster} alt={movie.Title} />
            <span className="moviedesc">{movie.Year}</span>
        </div>
    );

}

export default movie;