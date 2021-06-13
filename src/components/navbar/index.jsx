import React from 'react'
import {NavLink, Nav, Bars, NavMenu} from "./navbarEl";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Madlad Squad</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About 
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us 
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar
