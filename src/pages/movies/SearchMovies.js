import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../../components/Pagination';

const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const { searchMovies } = useParams();

    const getMovies = async () => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${searchMovies}&page=${page}`)
            setMovies(response.data.results)
            setTotalPages(response.data.total_pages)
            console.log(movies);
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        getMovies();
    }, [searchMovies, page]);

    const nextPage = () => {
        const currentPage = page;
        if (page < totalPages) {
          const nextPage = currentPage + 1;
          setPage(nextPage);
        }
      };
    
      const prevPage = () => {
        const currentPage = page;
        if (currentPage > 1) {
          const prevPage = currentPage - 1;
          setPage(prevPage);
        }
      };

    return (
        <section className="container py-4">
            <div className="row">
                {movies.length > 0 &&
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
                {movies.length === 0 && (
                    <div className="todo-placeholder-text">
                        The {searchMovies} movies not found
                    </div>
                )}
            </div>
            <Pagination 
                nextPage={ nextPage }
                prevPage={ prevPage }
                page={ page }
                totalPages={ totalPages }
            />
        </section>
    );
}

export default SearchMovies;
