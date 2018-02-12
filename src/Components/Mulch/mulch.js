import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import {getMulch} from '../../Ducks/reducer.js';
import CheckBox from 'react-animated-checkbox';
import Header from '../Header/header.js';

import nativeBlack from '../../Images/nativeBlack.jpg';
import redMulch from '../../Images/redMulch.jpg';
import regular from '../../Images/regularMulch.jpg';
require('./mulch.css');




class Mulch extends Component{
    constructor(props){
        super(props)
        this.state= {
            noChecked: false,
            yesChecked: false,
            mulch: false
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleClick(e, val){
        console.log(val);
        if (val === 'yes'){
            this.state.noChecked ? this.setState({noChecked: false, yesChecked: !this.state.yesChecked, mulch: true}) : this.setState({yesChecked: !this.state.yesChecked, mulch: !this.state.airation});
        } else {
            this.state.yesChecked? this.setState({yesChecked: false, noChecked: !this.state.noChecked, mulch: false}) : this.setState({noChecked: !this.state.noChecked, mulch: false});
        }
    }
handleSubmit(){
    this.props.getMulch(this.state.mulch);
}

render(){
    return(
        <div>
        <Header/>
            <p>Are you interested in mulch?</p>
                <div class='mulch-container'>
                    <img className="mulch-pic" src={nativeBlack}/>
                    <img className='mulch-pic' src={redMulch}/>
                    <img className='mulch-pic' src={regular}/>
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
                        <Link to='/question4'><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
                    </div>
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getMulch}) (Mulch))