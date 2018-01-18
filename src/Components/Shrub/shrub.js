import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import {getShrub} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';



require('./shrub.css');



class Shrub extends Component{
    constructor(props){
        super(props)
        this.state= {
            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleClick(e, val){
    

}
handleSubmit(){
    this.props.getGrass(this.state);
}

render(){
    return(
        <div>
        <Header/>
            <p>If you have shrubs, which kind?</p>
                <div class='content-container'>
                <p>Evergreen</p>
                    <img className="grass-pic" style={}name='grassType'src={} value='st-augustine' onClick={(e) => {this.handleClick(e, 'st-augustine')}}/>
                <p>Mixed</p>
                    <img className='grass-pic' style={}name='grassType'src={}  value='bermuda' onClick={(e) => {this.handleClick(e, 'bermuda')}}/>
                <p>Both</p>
                    <img className='grass-pic' style={}name='grassType'src={}  value='bermuda' onClick={(e) => {this.handleClick(e, 'bermuda')}}/>
                <p>I don't have shrubs</p>
                    <img className='grass-pic' style={}name='grassType'src={}  value='bermuda' onClick={(e) => {this.handleClick(e, 'bermuda')}}/>
                    <Link to='/question3'><button className='next' type='submit' onClick={this.handleSubmit()}>Next</button></Link>
                 </div>
                 </div>
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getShrub}) (Shrub))
