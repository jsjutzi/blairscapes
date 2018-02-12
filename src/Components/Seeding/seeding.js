import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import CheckBox from 'react-animated-checkbox';

import {getSeeding} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';






class Seeding extends Component{
    constructor(props){
        super(props)
        this.state= {
            wantsSeeding: false,
            yesChecked: false,
            noChecked: false
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleClick(e, val){
    console.log(val);
    if (val === 'yes'){
        this.state.noChecked ? this.setState({noChecked: false, yesChecked: !this.state.yesChecked, wantsSeeding: true}) : this.setState({yesChecked: !this.state.yesChecked, wantsSeeding: !this.state.wantsSeeding});
    } else {
        this.state.yesChecked? this.setState({yesChecked: false, noChecked: !this.state.noChecked, wantsSeeding: false}) : this.setState({noChecked: !this.state.noChecked, wantsSeeding: false});
    }
    
}
handleSubmit(){
    this.props.getSeeding(this.state.wantsSeeding);
}


render(){
    return(
        <div>
        <Header/>
            <p>Would you like your lawn to be green year-round (during winter)?</p>
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
                   <Link to='/question8'><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
        </div>
        
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getSeeding}) (Seeding))