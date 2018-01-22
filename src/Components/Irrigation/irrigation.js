import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import CheckBox from 'react-animated-checkbox';

import {getSprinkler} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';






class Irrigation extends Component{
    constructor(props){
        super(props)
        this.state= {
            hasSprinkler: false,
            yesChecked: false,
            noChecked: false
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleClick(e, val){
    console.log(val);
    if (val === 'yes'){
        this.state.noChecked ? this.setState({noChecked: false, yesChecked: !this.state.yesChecked, hasSprinkler: true}) : this.setState({yesChecked: !this.state.yesChecked, hasSprinkler: !this.state.hasSprinkler});
    } else {
        this.state.yesChecked? this.setState({yesChecked: false, noChecked: !this.state.noChecked, hasSprinkler: false}) : this.setState({noChecked: !this.state.noChecked, hasSprinkler: false});
    }
    
}
handleSubmit(e, val){
    this.props.getSprinkler(this.state.hasSprinkler);
}


render(){
    return(
        <div>
        <Header/>
            <p>Do you have an irrigation/sprinkler system?</p>
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
                   <Link to='/question5'><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
        </div>
        
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getSprinkler}) (Irrigation))