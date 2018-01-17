import React, {Component} from 'react';
import {Link, withRouter} from 'react-router';
import Header from '../Header/header.js';


class Grass extends Component{
    constructor(props){
        super(props)
        this.state= {
            grassType: '',
            grassValue: ''
        }
    }
handleClick(){

}
handleSubmit(){

}

render(){
    return(
        <div className='grass-view'>
            <Header/>

        </div>
    )
}
}

export default Grass 
