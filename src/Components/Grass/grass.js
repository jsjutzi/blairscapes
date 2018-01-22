import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {getGrass} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';

import stAugustine from '../../Images/st-augustine.gif';
import bermuda from '../../Images/Bermuda.jpg';

require('./grass.css');



class Grass extends Component{
    constructor(props){
        super(props)
        this.state= {
            grassType: '',
            grassValue: '',
            stAugustineBorder: {
                border: 'none'
            },
            bermudaBorder: {
                border: 'none'
            }
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
async handleClick(e, val){
    await this.setState({[e.target.name]: val});
    this.state.grassType === 'st-augustine' ? this.setState({grassValue: 1, stAugustineBorder: {border: 'solid 8px green'}, bermudaBorder: {border:'none'}}) : this.setState({grassValue: 2, bermudaBorder: {border:'solid 8px green'}, stAugustineBorder: {border: 'none'}});




}
handleSubmit(){
    
    this.props.getGrass(this.state);
}

render(){
    return(
        <div>
        <Header/>
            <p>Which kind of grass do you have?</p>
                <div class='content-container'>
                <p>St-Augustine</p>
                    <img className="grass-pic" style={this.state.stAugustineBorder}name='grassType'src={stAugustine} value='st-augustine' onClick={(e) => {this.handleClick(e, 'st-augustine')}}/>
                <p>Bermuda</p>
                    <img className='grass-pic' style={this.state.bermudaBorder}name='grassType'src={bermuda}  value='bermuda' onClick={(e) => {this.handleClick(e, 'bermuda')}}/>
                 <Link to='question2'>   <button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
                 </div>
                 </div>
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getGrass}) (Grass))
