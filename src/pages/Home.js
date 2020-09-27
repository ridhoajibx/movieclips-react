import React from 'react';
import MovieIndex from '../pages/movies/Index'

const Home = () => {

    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Movclips</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            <div className="container">
                <div className="row mt-4 justify-content-between align-items-center">
                    <div className="col-lg-6 text-uppercase">
                        <h4>Movies</h4>
                    </div>

                    <div className="col-lg-4">
                        <form className="d-flex">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search your movies" aria-label="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <MovieIndex />

        </div>
    );
}

export default Home;
