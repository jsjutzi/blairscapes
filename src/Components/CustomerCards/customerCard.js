import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import {getSelectedCustomer} from '../../Ducks/reducer.js';

require('./customerCard.css');


class CustomerCard extends Component{
            constructor(props){
                super(props)
                this.state = {
                    id: this.props.id
                }
                this.selectCustomer = this.selectCustomer.bind(this);
            }

selectCustomer(){
    getSelectedCustomer({id: this.state.id});
}

    render(){
        return(
            <div className='customer-card' onClick={this.selectCustomer}>
                <h1> {this.props.name}</h1>
                    <p>{this.props.address2}</p>
                    <h2>{this.props.estimate}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getSelectedCustomer})(CustomerCard));