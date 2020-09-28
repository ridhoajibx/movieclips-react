import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Jumbotron = () => {
    const [searchMovies, setSearchMovies] = useState("");
    let movies = useHistory();

    const handleChange = (e) => {
        setSearchMovies(e.target.value);
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       movies.push(`/search/${searchMovies}`);
    }
    return (
        <div className="hero-image">
            <div className="container hero-text">
                <h1 className="display-4 font-weight-bold">MOVCLIPS</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <div className="col-lg-4 offset-lg-4">
                    <form onSubmit={ handleSubmit }>
                        <input onChange={ handleChange } className="form-control mr-sm-2" type="search" placeholder="Search your movies" aria-label="Search" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
