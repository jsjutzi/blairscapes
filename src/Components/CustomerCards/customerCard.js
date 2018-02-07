import React, {Component} from 'react';
require('./customerCard.css');


class CustomerCard extends Component{
    


    render(){
        return(
            <div className='customer-card'>
                <h1> {this.props.name}</h1>
                    <p>{this.props.address1}</p>
                    <p>{this.props.address2}</p>
                    <p>{this.props.estimate}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.email}</p>
            </div>
        )
    }
}

export default CustomerCard;