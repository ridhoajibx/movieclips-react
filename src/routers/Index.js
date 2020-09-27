import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/errors/NotFound';
import Navbar from '../components/Navbar';
import MovieIndex from '../pages/movies/Index';
import MovieShow from '../pages/movies/Show';

const Index = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Navbar>
                    <Home />
                </Navbar>
            </Route>

            <Route path='/about'>
                <Navbar>
                    <About />
                </Navbar>
            </Route>

            <Route path='/contact'>
                <Navbar>
                    <Contact />
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
