import React from 'react';
import { Link } from 'react-router';
import "./Header.css"
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/mobile">Mobile</NavLink>
                <NavLink to="/laptop">Laptop</NavLink>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
};

export default Header;