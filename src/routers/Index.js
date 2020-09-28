import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/errors/NotFound';
import Navbar from '../components/Navbar';
import MovieIndex from '../pages/movies/Index';
import MovieShow from '../pages/movies/Show';
import SearchMovies from '../pages/search/SearchMovies';
import Jumbotron from '../components/Jumbotron';

const Index = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Navbar>
                    <Jumbotron />
                    <Home />
                </Navbar>
            </Route>
            
            <Route path='/search/:searchMovies'>
                <Navbar>
                    <Jumbotron />
                    <SearchMovies />
                </Navbar>
            </Route>

            <Route exact path='/movies'>
                <Navbar>
                    <MovieIndex />
                </Navbar>
            </Route>

            <Route path='/movies/:identifier'>
                <Navbar>
                    <MovieShow />
                </Navbar>
            </Route>

            <Route path='*' component={NotFound} />
        </Switch>
    );
}

export default Index;
