import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';

import {getSeasonal} from '../../Ducks/reducer.js';
import CheckBox from 'react-animated-checkbox';
import Header from '../Header/header.js';

import begonias from '../../Images/begonias.jpg';
import petunias from '../../Images/petunias.jpg';
import penta from '../../Images/penta.jpg';
import pansy from '../../Images/pansy.jpg';
import tulip from '../../Images/tulips.jpg';
import celosis from '../../Images/celosis.jpg';


require('./seasonal.css');





class Seasonal extends Component{
    constructor(props){
        super(props)
        this.state= {
            yesChecked: false,
            noChecked: false,
            seasonal: false 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleClick(e, val){
        console.log(val);
        if (val === 'yes'){
            this.state.noChecked ? this.setState({noChecked: false, yesChecked: !this.state.yesChecked, seasonal: true}) : this.setState({yesChecked: !this.state.yesChecked, seasonal: !this.state.airation});
        } else {
            this.state.yesChecked? this.setState({yesChecked: false, noChecked: !this.state.noChecked, seasonal: false}) : this.setState({noChecked: !this.state.noChecked, seasonal: false});
        }
}
handleSubmit(){
    this.props.getSeasonal(this.state.seasonal);
}


render(){
    return(
        <div>
        <Header/>
            <p>Would you prefer seasonal color?</p>
                <div className='content-container'>
                    <div className='seasonal-row-1'>
                            <img className="color-pic" src={begonias}/>             
                            <img className='color-pic' src={petunias}/>              
                            <img className='color-pic' src={penta}/>
                    </div>
                    <div className='seasonal-row-2'>
                            <img className="color-pic" src={pansy}/>            
                            <img className='color-pic' src={tulip}/>              
                            <img className='color-pic' src={celosis}/>
                    </div>
                    <div className='checkbox-container'>
                        <div className='yes-class'>
                            <p>Yes</p>
                            <CheckBox
                                checked={this.state.yesChecked} 
                                checkBoxStyle={{
                                    checkedColor: '#66f828',
                                    size: 60,
                                    unCheckedColor: '#ffffff'
                                }}
                                duration={400}
                                onClick={ (e) =>{this.handleClick(e, 'yes')}}
                                />
                                
                        </div>
                        <div className='no-class'/>          
                            <p>No</p>
                            <CheckBox
                                checked={this.state.noChecked} 
                                checkBoxStyle={{
                                    checkedColor: '#66f828',
                                    size: 60,
                                    unCheckedColor: '#ffffff'
                                }}
                                duration={400}
                                onClick={ (e) =>{this.handleClick(e, 'no')}}
                                />
                        </div>
                   <Link to='/question7'><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
                 </div>
        </div>
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getSeasonal}) (Seasonal))