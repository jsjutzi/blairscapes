import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import Header from '../Header/header.js';
require('./dashboard.css');


class Dashboard extends Component{
    



    render(){
        return(
            <div>
                <Header/>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Dashboard))