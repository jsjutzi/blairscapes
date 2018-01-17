import React, {Component} from 'react';
import logo from '../../Images/blairscapes-vector.png';
import ('./header.css');



class Header extends Component{
    

    render(){
        return(
            <div class='headerBar'>
                <img src={logo}/>
            </div>
        )
    }
}

export default Header;