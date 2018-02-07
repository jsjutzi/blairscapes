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
                key={estimate.id}
                name={estimate.customer_name}
                address1={estimate.address_1}
                address2={estimate.address_2}
                phone={estimate.phone}
                email={estimate.email}
                />
        ));
        return(
            <div>
                <Header/>
                {card}
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Dashboard))