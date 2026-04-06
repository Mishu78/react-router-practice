import React from 'react';

const User = ({user}) => {
    const {name,email,phone}=user;
    return (
        <div>
            <h3>name:{name}</h3>
            <h3>email:{email}</h3>
            <h3>phone:{phone}</h3>
        </div>
    );
};

export default User;