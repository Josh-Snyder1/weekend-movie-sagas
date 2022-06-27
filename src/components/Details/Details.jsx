import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory, useParams } from "react-router-dom";

function Details() {

    const dispatch = useDispatch();
    const movieDetail = useSelector(store => store.movieDetail);
    const movies = useSelector(store => store.movies)
    const history = useHistory();
    let movieId = useParams().id

    useEffect(() => {
        console.log('in details useEffect', movieId)
        dispatch({ 
            type: 'FETCH_DETAILS',
            payload: movieId
        });
    }, [movieId]);

    function nextPrevFeature(evt) {
        console.log('in nextPrevFeature', evt.target.value);
        console.log('in nextPrevFeature', movieId)
        switch (evt.target.value) {
            //checks value of button if previous button clicked
            //this code runs
            case 'previous':
                //checks to see if at beginning of movies
                if (movieId === 1) {
                    console.log('in id = 1', movieId)
                   return history.push(`/details/${movies.length}`)
                    // history.go(0)
                }//decrements movieId by one 
                else {
                    parseInt(movieId)-1;
                    console.log('in previous',movieId)
                    return history.push(`/details/${movieId}`)
                    // history.go(0)
                }
                break;
            case 'next':
                if (movieId === movies.length) {
                    console.log('in next movieId length')
                    history.push(`/details/0`)
                    // history.go(0)
                }
                else {
                    movieId++;
                    console.log('in next length',movies.length)
                    history.push(`/details/${movieId}`);
                    // history.go(0)
                }
                break;
        }
    }

    return (
        movieDetail.length > 0 &&
        <>
            <div>
                <div className='details-nav-bar'>
                    <button
                        value='previous'
                        onClick={(evt) => nextPrevFeature(evt)}
                    >Previous</button>
                    <button onClick={() => history.push(`/`)}>Home</button>
                    <button
                        value='next'
                        onClick={(evt) => nextPrevFeature(evt)}
                    >Next</button>
                </div>
            <h3>{movieDetail[0].title}</h3>
                            <img 
                                src={movieDetail[0].poster} 
                                alt={movieDetail[0].title}
                            />
                            <p>Genres: {movieDetail.map(movie => (
                                movie.name
                            )).join(', ')}</p>
                            <p>{movieDetail[0].description}</p>
            </div>
        </>
    );
}

export default Details;