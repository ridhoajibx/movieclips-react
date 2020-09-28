import React from 'react';
import Jumbotron from '../components/Jumbotron';
import MovieIndex from '../pages/movies/Index'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-4 justify-content-between align-items-center">
                    <div className="col-lg-6 text-uppercase">
                        <h4>Movies</h4>
                    </div>
                </div>
            </div>
                <MovieIndex />

        </div>
    );
}

export default Home;
