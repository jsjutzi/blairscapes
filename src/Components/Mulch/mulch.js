import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import {getMulch} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';

import nativeBlack from '../../Images/nativeBlack.jpg';
import redMulch from '../../Images/redMulch.jpg';
import regular from '../../Images/regularMulch.jpg';




class Mulch extends Component{
    constructor(props){
        super(props)
        this.state= {
            mulchType: '',
            mulchValue: null,
            nativeBlackBorder: {border: 'none'},
            redMulchBorder: {border: 'none'},
            regularBorder: {border: 'none'}
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
async handleClick(e, val){
    await this.setState({[e.target.name]: val});
    this.state.mulchType === 'nativeBlack' ? this.setState({mulchValue: 1, nativeBlackBorder: {border: 'solid 8px green'}, redMulchBorder: {border:'none'}, regularBorder: {border:'none'}}) : false;
    this.state.mulchType === 'redMulch' ? this.setState({mulchValue: 2, redMulchBorder: {border: 'solid 8px green'}, nativeBlackBorder: {border:'none'}, regularBorder: {border:'none'}}) : false;
    this.state.mulchType === 'regular' ? this.setState({mulchValue: 3, regularBorder: {border: 'solid 8px green'}, nativeBlackBorder: {border:'none'}, redMulchBorder: {border:'none'}}) : false;
}
handleSubmit(){
    this.props.getMulch(this.state);
}

render(){
    return(
        <div>
        <Header/>
            <p>If you have mulch, which kind?</p>
                <div class='content-container'>
                <p>Native Black</p>
                    <img className="grass-pic" style={this.state.nativeBlackBorder}name='mulchType'src={nativeBlack} value='nativeBlack' onClick={(e) => {this.handleClick(e, 'nativeBlack')}}/>
                <p>Red</p>
                    <img className='grass-pic' style={this.state.redMulchBorder} name='mulchType'src={redMulch}  value='redMulch' onClick={(e) => {this.handleClick(e, 'redMulch')}}/>
                <p>Regular</p>
                    <img className='grass-pic' style={this.state.regularBorder} name='mulchType'src={regular}  value='regular' onClick={(e) => {this.handleClick(e, 'regular')}}/>
                   <Link to='/question4'><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
                 </div>
                 </div>
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getMulch}) (Mulch))