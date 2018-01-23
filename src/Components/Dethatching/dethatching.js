import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import CheckBox from 'react-animated-checkbox';

import {getDethatching} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';






class Dethatching extends Component{
    constructor(props){
        super(props)
        this.state= {
            dethatching: false,
            yesChecked: false,
            noChecked: false
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleClick(e, val){
    console.log(val);
    if (val === 'yes'){
        this.state.noChecked ? this.setState({noChecked: false, yesChecked: !this.state.yesChecked, dethatching: true}) : this.setState({yesChecked: !this.state.yesChecked, dethatching: !this.state.dethatching});
    } else {
        this.state.yesChecked? this.setState({yesChecked: false, noChecked: !this.state.noChecked, dethatching: false}) : this.setState({noChecked: !this.state.noChecked, adethatching: false});
    }
    
}
handleSubmit(e, val){
    this.props.getDethatching(this.state.dethatching);
}


render(){
    return(
        <div>
        <Header/>
            <p>Will your lawn need dethatching?</p>
                <div class='content-container'>
                    <div className='checkbox-container'>
                        <div className='yes-class'>
                            <p>Yes</p>
                            <CheckBox
                                checked={this.state.yesChecked} 
                                checkBoxStyle={{
                                    checkedColor: '#008000',
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
                                    checkedColor: '#008000',
                                    size: 60,
                                    unCheckedColor: '#ffffff'
                                }}
                                duration={400}
                                onClick={ (e) =>{this.handleClick(e, 'no')}}
                                />
                        </div>
                    </div>
                   <Link to='/address'><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
        </div>
        
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getDethatching}) (Dethatching))