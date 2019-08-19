import  React, { Component } from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';


const Navbar=()=>{

    return(
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <a href="#" className="brand-logo">AOS</a>
                <ul className="right">
                    <li><NavLink to='/'>anasayfa</NavLink></li>
                    <li><NavLink to="/about">hakkimizda</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}
export default withRouter(Navbar);
