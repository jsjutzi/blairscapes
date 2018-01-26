import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {getFootage} from '../../Ducks/reducer.js';

import {Link, withRouter} from 'react-router-dom';
import Header from '../Header/header.js';

require('./address.css');





class Address extends Component{
    constructor(props){
        super(props)
        this.state= {
            address1: null,
            address2: null,
            response: false
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleSubmit(){
    this.props.getFootage({address1: this.state.address1, address2: this.state.address2})
    .then ((response) => {
        if(response){
        this.setState({response: true});
        }

    })
}


render(){
    return(
        <div>
        <Header/>
            <p>Please enter your address below.  This information will not be retained by Blairscapes nor will it be shared with any third parties.  It will only be used to pull the estimated square footage
            of the property from a public database. This information will help us give you the most accurate estimate. </p>
                <div class='content-container'>
                 <input className='inputs'type='text' placeholder='street address' name='address1' onChange={e => this.setState({address1: e.target.value})}/>
                 <input className='inputs' type='text' placeholder='city, state' name='address2' onChange={e => this.setState({ address2: e.target.value})}/>
                    </div>
                   <button className='next' type='submit' onClick={this.handleSubmit}>Next</button>
        </div>
        
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getFootage}) (Address))