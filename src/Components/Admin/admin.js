import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import Header from '../Header/header.js';

require('./admin.css');




class Admin extends Component{
    constructor(props){
        super(props)
        this.state= {
            accessCode: 0
        }
    }

render(){
    return(
        <div>
            <Header/>
            <div className='login-container'>
                <p>Please enter access code:</p>
                <input className='code-input' type='text'></input>
                <button className='login'>Login</button>
            </div>
        </div>
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Admin))