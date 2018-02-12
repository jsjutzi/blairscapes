import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import CheckBox from 'react-animated-checkbox';

import {getFertilizer} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';






class Fertilizer extends Component{
    constructor(props){
        super(props)
        this.state= {
            fallChecked: false,
            winterChecked: false,
            springChecked: false,
            summerChecked: false
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleClick(e, val){
    let name = val + 'Checked';
    this.setState({[name]: !this.state[name]});
}
handleSubmit(e, val){
    this.props.getFertilizer(this.state);
}


render(){
    return(
        <div>
        <Header/>
            <p>How often will you need fertilizer? (Click all that apply)</p>
                <div class='content-container'>
                    <div className='checkbox-container'>
                        <div className='season-class'>
                            <p>Spring</p>
                            <CheckBox
                                checked={this.state.springChecked} 
                                checkBoxStyle={{
                                    checkedColor: '#66f828',
                                    size: 60,
                                    unCheckedColor: '#ffffff'
                                }}
                                duration={400}
                                onClick={ (e) =>{this.handleClick(e, 'spring')}}
                                />
                                
                        </div>
                        <div className='season-class'/>          
                            <p>Summer</p>
                            <CheckBox
                                checked={this.state.summerChecked} 
                                checkBoxStyle={{
                                    checkedColor: '#66f828',
                                    size: 60,
                                    unCheckedColor: '#ffffff'
                                }}
                                duration={400}
                                onClick={ (e) =>{this.handleClick(e, 'summer')}}
                                />
                        </div>
                        <div className='season-class'>
                            <p>Fall</p>
                            <CheckBox
                                checked={this.state.fallChecked} 
                                checkBoxStyle={{
                                    checkedColor: '#66f828',
                                    size: 60,
                                    unCheckedColor: '#ffffff'
                                }}
                                duration={400}
                                onClick={ (e) =>{this.handleClick(e, 'fall')}}
                                />
                                
                        </div>
                        <div className='season-class'>
                            <p>Winter</p>
                            <CheckBox
                                checked={this.state.winterChecked} 
                                checkBoxStyle={{
                                    checkedColor: '#66f828',
                                    size: 60,
                                    unCheckedColor: '#ffffff'
                                }}
                                duration={400}
                                onClick={ (e) =>{this.handleClick(e, 'winter')}}
                                />
                                
                        </div>
                    </div>
                   <Link to='/question9'><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
        </div>
        
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getFertilizer}) (Fertilizer))