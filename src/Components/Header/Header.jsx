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
                <NavLink to="/">Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to="users2">Users2</NavLink>
            </nav>
        </div>
    );
};

export default Header;