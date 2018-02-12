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
            noChecked: false,
            pageRoute: false
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleClick(e, val){
    console.log(val);
    if (val === 'yes'){
        this.state.noChecked ? this.setState({noChecked: false, yesChecked: !this.state.yesChecked, hasSprinkler: true, pageRoute: true}) : this.setState({yesChecked: !this.state.yesChecked, hasSprinkler: !this.state.hasSprinkler, pageRoute: !this.state.pageRoute});
    } else {
        this.state.yesChecked? this.setState({yesChecked: false, noChecked: !this.state.noChecked, hasSprinkler: false, pageRoute: false}) : this.setState({noChecked: !this.state.noChecked, hasSprinkler: false, pageRoute: !this.state.pageRoute});
    }
    
}
handleSubmit(e, val){
    this.props.getSprinkler(this.state.hasSprinkler);
}


render(){
    let route;
    this.state.pageRoute? route = '/question5' : route = '/question6';
     
    
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
                    </div>
                   <Link to={route}><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
        </div>
        
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getSprinkler}) (Irrigation))