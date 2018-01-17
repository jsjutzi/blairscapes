import React from 'react';
import {Switch, Route} from 'react-router-dom';

//components to be rendered
import Home from './Components/Home/home.js';
import Grass from './Components/Grass/grass.js';




export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/question1' component={Grass}/>
    </Switch>
)