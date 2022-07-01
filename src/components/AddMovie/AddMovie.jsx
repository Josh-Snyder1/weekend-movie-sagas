import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function AddMovie() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    function addMovie(evt) {
        evt.preventDefault()
        const form = document.querySelectorAll('#add-movie-form input');
        console.log('in add movie', form)
    }

    return (
        <>
            <form id="add-movie-form">
                Movie Title: <input
                    className='form-input'
                    type='text'
                    placeholder='Movie Title'
                />
                <br/>
                Image URL: <input
                    className='form-input'
                    type='text'
                    placeholder='Poster Image url'
                />
                <br/>
                Description: <input
                    className='form-input'
                    type='text'
                    placeholder='Movie Description'
                />
                <br/>
            Genre: <select>
                <option></option>
                {/* values correspond to class id value in DB */}
                {genres.map((genre) => {
                    return <option key={genre.id} value={genre.id}>{genre.name}</option>
                })}
            </select>
            <button onClick={addMovie}>Add Movie</button>
            </form>
        </>

    );
}

export default AddMovie;