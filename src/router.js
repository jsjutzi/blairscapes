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
import Seeding from './Components/Seeding/seeding.js';
import Fertilizer from './Components/Fertilizer/fertilizer.js';
import Airation from './Components/Airation/airation.js';
import Dethatching from './Components/Dethatching/dethatching.js';
import Address from './Components/Address/address.js';
import Estimate from './Components/FormulaEstimate/estimate.js';
import ThankYou from './Components/ThankYou/thankYou.js';
import Admin from './Components/Admin/admin.js';
import Dashboard from './Components/Dashboard/dashboard.js';
import Profile from './Components/Profile/profile.js';
 




export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/question1' component={Grass}/>
        <Route path='/question2' component={Shrub}/>
        <Route path='/question3' component={Mulch}/>
        <Route path='/question4' component={Sprinkler}/>
        <Route path='/question5' component={Inspection}/>
        <Route path='/question6' component={Seasonal}/>
        <Route path='/question7' component={Seeding}/>
        <Route path='/question8' component={Fertilizer}/>
        <Route path='/question9' component={Airation}/>
        <Route path='/question10' component={Dethatching}/>
        <Route path='/address' component={Address}/>
        <Route path='/estimate' component={Estimate}/>
        <Route path='/thankYou' component={ThankYou}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)