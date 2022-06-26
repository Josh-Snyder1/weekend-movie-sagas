import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory, useParams } from "react-router-dom";

function Details() {

    const dispatch = useDispatch();
    const movieDetail = useSelector(store => store.movieDetail);
    const movies= useSelector(store => store.movies)
    const history = useHistory();
    let movieId = useParams()

    useEffect(() => {
        console.log('in details useEffect', movieId)
        dispatch({ 
            type: 'FETCH_DETAILS',
            payload: movieId
        });
    }, []);

    function nextPrevFeature(evt) {
        console.log('in nextPrevFeature', evt.target.value);
        switch (evt.target.value) {
            case 'previous':
                if (movieId.id === 0) {
                    return history.push(`/details/${movies.length}`)
                }
                else {
                    Number(movieId.id)-1;
                    console.log('in previous',movieId.id)
                    return history.push(`/details/${movieId}`)
                }
            case 'next':
                if (movieId.id === movies.length) {
                    return history.push(`/details/0`)
                }
                else {
                    Number(movieId.id)+1;
                    console.log('in next',movieId.id)
                    return history.push(`/details/${movieId}`);
                }
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