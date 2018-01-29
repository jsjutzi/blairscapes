import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';

import {getSeasonal} from '../../Ducks/reducer.js';
import Header from '../Header/header.js';

import begonias from '../../Images/begonias.jpg';
import petunias from '../../Images/petunias.jpg';
import penta from '../../Images/penta.jpg';
import pansy from '../../Images/pansy.jpg';
import tulip from '../../Images/tulips.jpg';
import celosis from '../../Images/celosis.jpg';
import potatoVine from '../../Images/potatoVine.jpg';


const selected = {border: 'solid 8px green'};
const unselected = {border: 'none'};


class Seasonal extends Component{
    constructor(props){
        super(props)
        this.state= {
            seasonal: '',
            begoniaBorder: unselected,
            petuniaBorder: unselected,
            pentaBorder: unselected,
            pansyBorder: unselected,
            tulipBorder: unselected,
            celosisBorder: unselected,
            potatoVineBorder: unselected,
            choices: ['begonia', 'petunia', 'penta', 'pansy', 'tulip', 'celosis', 'potatoVine']

            
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
async handleClick(e, val){
    await this.setState({seasonal: val});
    // console.log(val);
    // this.state.choices.map((item) => {
    //     if (val === item){
    //         let name = val + 'Border';
    //         console.log(name);
    //         this.setState({[name]: selected});
    //     } else {
    //         let name = val + 'Border';
    //         console.log('not a match', name);
    //         this.setState({[name]: unselected});
    //     }

    // })
    if(val === 'begonia'){
        this.setState({begoniaBorder: selected, petuniaBorder: unselected, pentaBorder: unselected, pansyBorder: unselected, tulipBorder: unselected, celosisBorder: unselected, potatoVineBorder: unselected});
    }
    else if(val ==='petunia'){
        this.setState({petuniaBorder: selected, begoniaBorder: unselected, pentaBorder: unselected, pansyBorder: unselected, tulipBorder: unselected, celosisBorder: unselected, potatoVineBorder: unselected});
    }
    else if(val ==='penta'){
        this.setState({pentaBorder: selected, petuniaBorder: unselected, begoniaBorder: unselected, pansyBorder: unselected, tulipBorder: unselected, celosisBorder: unselected, potatoVineBorder: unselected});
    } 
    else if(val ==='pansy'){
        this.setState({pansyBorder: selected, petuniaBorder: unselected, pentaBorder: unselected, begoniaBorder: unselected, tulipBorder: unselected, celosisBorder: unselected, potatoVineBorder: unselected});
    }
    else if(val === 'tulip'){
        this.setState({tulipBorder: selected, petuniaBorder: unselected, pentaBorder: unselected, pansyBorder: unselected, begoniaBorder: unselected, celosisBorder: unselected, potatoVineBorder: unselected});
    }
    else if(val === 'celosis'){
        this.setState({celosisBorder: selected, petuniaBorder: unselected, pentaBorder: unselected, pansyBorder: unselected, tulipBorder: unselected, begoniaBorder: unselected, potatoVineBorder: unselected});
    }
    else{
        this.setState({potatoVineBorder: selected, petuniaBorder: unselected, pentaBorder: unselected, pansyBorder: unselected, tulipBorder: unselected, celosisBorder: unselected, begoniaBorder: unselected});
    }
}
handleSubmit(){
    this.props.getSeasonal(this.state.seasonal);
}


render(){
    return(
        <div>
        <Header/>
            <p>Which seasonal color would you prefer?</p>
                <div class='content-container'>
                <p>Begonias</p>
                    <img className="grass-pic" style={this.state.begoniaBorder}name='seasonal'src={begonias} value='begonias' onClick={(e) => {this.handleClick(e, 'begonia')}}/>
                <p>Petunias</p>
                    <img className='grass-pic' style={this.state.petuniaBorder} name='seasonal'src={petunias}  value='petunias' onClick={(e) => {this.handleClick(e, 'petunia')}}/>
                <p>Penta</p>
                    <img className='grass-pic' style={this.state.pentaBorder} name='seasonal'src={penta}  value='penta' onClick={(e) => {this.handleClick(e, 'penta')}}/>
                <p>Pansy</p>
                    <img className="grass-pic" style={this.state.pansyBorder}name='seasonal'src={pansy} value='pansy' onClick={(e) => {this.handleClick(e, 'pansy')}}/>
                <p>Tulip</p>
                    <img className='grass-pic' style={this.state.tulipBorder} name='seasonal'src={tulip}  value='tulip' onClick={(e) => {this.handleClick(e, 'tulip')}}/>
                <p>Celosis</p>
                    <img className='grass-pic' style={this.state.celosisBorder} name='seasonal'src={celosis}  value='celosis' onClick={(e) => {this.handleClick(e, 'celosis')}}/>
                <p>Potato Vine</p>
                    <img className='grass-pic' style={this.state.potatoVineBorder} name='seasonal'src={potatoVine}  value='potatoVine' onClick={(e) => {this.handleClick(e, 'potatoVine')}}/>
                   <Link to='/question7'><button className='next' type='submit' onClick={this.handleSubmit}>Next</button></Link>
                 </div>
        </div>
    )
}
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {getSeasonal}) (Seasonal))