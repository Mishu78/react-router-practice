import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,email,phone}=user;
    const userStyle={
        border: '2px solid yellow',
        borderRadius:'10px',
        fontWeight:'bold',
        margin:"10px",
    }
    return (
        <div style={userStyle}>
            <h3>name:{name}</h3>
            <h3>email:{email}</h3>
            <h3>phone:{phone}</h3>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;