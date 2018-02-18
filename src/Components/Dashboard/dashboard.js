import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import Header from '../Header/header.js';
import CustomerCard from '../CustomerCards/customerCard.js';

require('./dashboard.css');


class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            estimates: []
        }
    }
    

componentDidMount(){
    axios.get('/api/getContacts')
    .then(response => {
        this.setState({estimates: response.data});
    })
    .catch(err => err);
}

    render(){
        const card = this.state.estimates.map(estimate => (
            <CustomerCard
                key={estimate.customer_id}
                id={estimate.customer_id}
                name={estimate.customer_name}
                address2={estimate.address_2}
                estimate={estimate.estimate}
                />
        ));
        return(
            <div>
                <Header/>
                <div className='customer-reference'>
                    {card}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Dashboard))