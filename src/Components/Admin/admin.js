import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {Link, withRouter} from 'react-router-dom';
import Header from '../Header/header.js';

require('./admin.css');




class Admin extends Component{
    constructor(props){
        super(props)
        this.state= {
            accessCode: 0
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

handleLogin(){
    axios.post('/api/login', {code: this.state.accessCode})
    .then(response => {
        console.log(response.data);
        response.data === 'Valid' ? this.props.history.push('/dashboard') : alert('Please enter correct access code');
    })
    .catch(err => err);
}
render(){
    return(
        <div>
            <Header/>
            <div className='login-container'>
                <p>Please enter access code:</p>
                <input className='code-input' type='text' onChange={e => {this.setState({accessCode: e.target.value})}}></input>
                <button className='login' onClick={this.handleLogin}>Login</button>
            </div>
        </div>
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Admin))