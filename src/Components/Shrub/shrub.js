import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import {getShrub} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';

import both from '../../Images/both-shrubs.jpg';
import evergreen from '../../Images/evergreen-shrub.jpg';
import mixed from '../../Images/mixed-shrubs.jpg';

require('./shrub.css');



class Shrub extends Component{
    constructor(props){
        super(props)
        this.state= {
            shrubType: '',
            shrubValue: null,
            evergreenBorder: {border: 'none'},
            mixedBorder: {border: 'none'},
            bothBorder: {border: 'none'}
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
async handleClick(e, val){
    await this.setState({[e.target.name]: val});
    this.state.shrubType === 'evergreen' ? this.setState({shrubValue: 1, evergreenBorder: {border: 'solid 8px #66f828'}, mixedBorder: {border:'none'}, bothBorder: {border:'none'}}) : false;
    this.state.shrubType === 'mixed' ? this.setState({shrubValue: 2, mixedBorder: {border: 'solid 8px #66f828'}, evergreenBorder: {border:'none'}, bothBorder: {border:'none'}}) : false;
    this.state.shrubType === 'both' ? this.setState({shrubValue: 3, bothBorder: {border: 'solid 8px #66f828'}, mixedBorder: {border:'none'}, evergreenBorder: {border:'none'}}) : false;
}
handleSubmit(){
    this.props.getShrub(this.state);
}

render(){
    return(
        <div>
        <Header/>
            <p>If you have shrubs, which kind?</p>
                <div class='content-container'>
                <p>Evergreen</p>
                    <img className="grass-pic" style={this.state.evergreenBorder}name='shrubType'src={evergreen} value='st-augustine' onClick={(e) => {this.handleClick(e, 'evergreen')}}/>
                <p>Mixed</p>
                    <img className='grass-pic' style={this.state.mixedBorder} name='shrubType'src={mixed}  value='bermuda' onClick={(e) => {this.handleClick(e, 'mixed')}}/>
                <p>Both</p>
                    <img className='grass-pic' style={this.state.bothBorder} name='shrubType'src={both}  value='bermuda' onClick={(e) => {this.handleClick(e, 'both')}}/>
                   <Link to='/question3'><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
                 </div>
        </div>
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getShrub}) (Shrub))
