import React, {Component} from 'react';
import Header from '../Header/header.js';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';

require('./profile.css');


class Profile extends Component{



    render(){
        const {customer_name, address_1, address_2, phone, email, customer_comments, has_irrigation, mulch_wanted, seasonal_color, estimate, squarefootage} = this.props.selectedCustomer;
        let wantsMulch = '';
        let hasIrrigation = '';
        let wantsSeasonal = '';

        has_irrigation ? hasIrrigation = 'Yes' : hasIrrigation = 'No';
        mulch_wanted ? wantsMulch = 'Yes' : wantsMulch = 'No';
        seasonal_color ? wantsSeasonal = 'Yes' : wantsSeasonal = 'No';
    
        return(
            <div className='customer-profile'>
                <Header/>
                <h1> {customer_name}</h1>
                <p>{address_1}</p>
                <p>{address_2}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
                <p>Customer Comments: {customer_comments}</p>
                <p>Has Irrigation : {hasIrrigation}</p>
                <p>Wants Mulch : {wantsMulch}</p>
                <p>Wants Seasonal Color: {wantsSeasonal}</p>
                <p>Square Footage: {squarefootage}</p>
                <h2>Estimate: {estimate}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Profile));