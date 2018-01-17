import React, {Component} from 'react';
import {getGrass} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';
import Footer from '../Footer/footer.js';

import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import('./home.css');



class Home extends Component{
    constructor(props){
        super(props)
        this.state= {
            address: {}
        };
    }

    render(){
        return(
            <div>
                <Header/>
                <div className='question'>
                    <p>Welcome to Blairscapes!  To get a free estimate for lawncare, please click below and answer 10 simple questions about your needs to help us determine your quote.</p>
                </div>
                <Link to='/question1'><button className='get-quote'>Get Quote</button></Link>
               
            </div>
        )
    }
}

const mapStateToProps = state => state;
const connected = connect(mapStateToProps, { getGrass })(Home);
const RoutedContainer = withRouter(connected);
export default RoutedContainer;