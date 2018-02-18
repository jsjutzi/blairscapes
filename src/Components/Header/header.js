import React, {Component} from 'react';
import logo from '../../Images/blairscapes-vector.png';
require('./header.css');



class Header extends Component{
    

    render(){
        return(
            <div className='headerBar'>
                <img className='logo'src={logo}/>
            </div>
        )
    }
}

export default Header;