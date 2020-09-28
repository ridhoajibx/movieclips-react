import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Index = (props) => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`)
            setMovies(response.data.results)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getMovies();
    }, [])
    return (
        <section className="container py-4">
            <div className="row">
                {
                    movies.map((movie, index) => {
                        return (
                            <div key={index} className="col-lg-2 col-xs-6">
                                <Link to={`/movies/${movie.id}`} className="card card-small text-decoration-none text-dark">
                                    {!movie.poster_path ? 
                                        <img src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg" className="card-img-top" alt="..." /> :
                                        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." /> 
                                    }
                                    <div className="card-body">
                                        <p className="font-weight-bold mb-0"> {movie.title} </p>
                                        <p className="text-muted mb-0"> Rate : {movie.vote_average} </p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Index;
