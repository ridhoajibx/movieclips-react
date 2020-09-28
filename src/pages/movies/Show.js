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
        <div className="container py-4">
            <div className="d-flex justify-content-end align-items-center mt-4">
                <Link to="/" className="btn btn-primary btn-small d-flex align-items-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
                    </svg>
                    Back
                </Link>
            </div>

            <div className="row">
                <div className="col-sm-12 my-4">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                {!movie.poster_path ?
                                    <img style={{ width: '100%' }} src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg" alt="..." /> :
                                    <img style={{ width: '100%' }} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="..." />
                                }
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{movie.title}</h1>
                                    <p className="card-text lead">{movie.overview}</p>
                                    <p className="card-text text-muted mb-0"> Rate : {movie.vote_average} </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Published : {movie.release_date}
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
