import React, {Component} from 'react';
import logo from '../../Images/blairscapes-vector.png';
import ('./header.css');



class Header extends Component{
    

    render(){
        return(
            <div className='headerBar'>
                <img src={logo}/>
            </div>
        )
    }
}

export default Header;