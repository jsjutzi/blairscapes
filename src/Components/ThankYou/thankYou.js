import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import Header from '../Header/header.js';
require('./thankYou.css');






class ThankYou extends Component{
    



render(){
    return(
        <div>
            <Header/>
            <p className='thanker'>Thank you for your interest in becoming a Blairscapes customer!  We will reach out to you soon to schedule your on-site visit!</p>
        </div>
        
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps) (ThankYou))