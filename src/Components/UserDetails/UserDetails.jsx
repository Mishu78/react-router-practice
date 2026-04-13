import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user= useLoaderData();
    const {website,name}=user;
    return (
        <div>
            <h2>This is user id</h2>
            <h2>name:{name}</h2>
            <h2>website:{website}</h2>
        </div>
    );
};

export default UserDetails;