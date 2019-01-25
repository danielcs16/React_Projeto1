import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home'
import Anuncio from './pages/anuncio'

const Routes = () => (
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/anuncio/:id" component={ Anuncio } />
        </Switch>
    )

export default Routes