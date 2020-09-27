import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Show = () => {
    const [movie, setMovie] = useState([])
    let { identifier } = useParams()

    const getMovie = async () => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/${identifier}?api_key=${process.env.REACT_APP_APIKEY}`)
            setMovie(response.data)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getMovie()
    }, [identifier])
    return (
        <div className="container">
            <div className="d-flex justify-content-end mt-4">
                <Link to="/" className="btn btn-secondary btn-small">Back</Link>
            </div>

            <div className="row">
                <div className="col-sm-12 my-4">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img style={{ width: '100%' }} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{movie.title}</h1>
                                    <p className="card-text lead">{movie.overview}</p>
                                    <p className="card-text text-muted mb-0"> Rate : {movie.vote_average} </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Published : { movie.release_date}
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Show;
