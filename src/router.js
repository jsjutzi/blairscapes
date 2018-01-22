import React from 'react';
import {Switch, Route} from 'react-router-dom';

//components to be rendered
import Home from './Components/Home/home.js';
import Grass from './Components/Grass/grass.js';
import Shrub from './Components/Shrub/shrub.js';
import Mulch from './Components/Mulch/mulch.js';
import Sprinkler from './Components/Irrigation/irrigation.js';
import Inspection from './Components/Inspection/inspection.js';
import Seasonal from './Components/SeasonalColor/seasonal.js';
 




export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/question1' component={Grass}/>
        <Route path='/question2' component={Shrub}/>
        <Route path='/question3' component={Mulch}/>
        <Route path='/question4' component={Sprinkler}/>
        <Route path='/question5' component={Inspection}/>
        <Route path='/question6' component={Seasonal}/>
    </Switch>
)