import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory, useParams } from "react-router-dom";

function Details() {

    const dispatch = useDispatch();
    const movieDetail = useSelector(store => store.movieDetail);
    const history = useHistory();
    const movieId = useParams()
    useEffect(() => {
        console.log('in details useEffect', movieId)
        dispatch({ 
            type: 'FETCH_DETAILS',
            payload: movieId
        });
    }, []);

    return (
        movieDetail.length > 0 &&
        <>
            <div>
            <h3>{movieDetail[0].title}</h3>
                            <img 
                                src={movieDetail[0].poster} 
                                alt={movieDetail[0].title}
                            />
                            <p>{movieDetail[0].description}</p>
            </div>
        </>
    );
}

export default Details;