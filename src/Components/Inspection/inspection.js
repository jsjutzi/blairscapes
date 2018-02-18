import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import CheckBox from 'react-animated-checkbox';

import {getInspection} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';

require('./inspection.css');




class Inspection extends Component{
    constructor(props){
        super(props)
        this.state= {
            inspection: '',
            quarterlyChecked: false,
            biAnnuallyChecked: false,
            yearlyChecked: false

            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleClick(e, val){
    console.log(val);
    if (val === 'quarterly'){
        this.setState({quarterlyChecked: true, biAnnuallyChecked: false, yearlyChecked: false, inspection: 'quarterly'});
    } else if (val === 'bi-annually'){
        this.setState({biAnnuallyChecked: true, quarterlyChecked: false, yearlyChecked: false, inspection: 'bi-annually'});
    } else {
        this.setState({yearlyChecked: true, biAnnuallyChecked: false, quarterlyChecked: false, inspection: 'yearly'});
    }
    
}
handleSubmit(){
    this.props.getInspection(this.state.inspection);
}


render(){
    return(
        <div>
        <Header/>
            <p>What inspection would you like for your irrigation/sprinkler system?</p>
                <div class='content-container'>
                    <div className='checkbox-container'>
                        <div className='inspection-class'>
                            <p>Quarterly</p>
                            <CheckBox
                                checked={this.state.quarterlyChecked} 
                                checkBoxStyle={{
                                    checkedColor: '#66f828',
                                    size: 70,
                                    unCheckedColor: '#ffffff'
                                }}
                                duration={400}
                                onClick={ (e) =>{this.handleClick(e, 'quarterly')}}
                                />
                                
                        </div>
                        <div className='inspection-class'/>          
                            <p>Bi-Annually</p>
                            <CheckBox
                                checked={this.state.biAnnuallyChecked} 
                                checkBoxStyle={{
                                    checkedColor: '#66f828',
                                    size: 70,
                                    unCheckedColor: '#ffffff'
                                }}
                                duration={400}
                                onClick={ (e) =>{this.handleClick(e, 'bi-annually')}}
                                />
                        
                        <div className='inspection-class'/>          
                            <p>Yearly</p>
                            <CheckBox
                                checked={this.state.yearlyChecked} 
                                checkBoxStyle={{
                                    checkedColor: '#66f828',
                                    size: 70,
                                    unCheckedColor: '#ffffff'
                                }}
                                duration={400}
                                onClick={ (e) =>{this.handleClick(e, 'yearly')}}
                                />
                        </div>
                        </div>
                   
                   <Link to='/question6'><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
                </div>
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getInspection}) (Inspection))