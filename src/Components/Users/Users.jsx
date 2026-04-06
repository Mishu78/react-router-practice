import React from 'react';

import User from '../User/User';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users=useLoaderData()
    console.log(users);
    return (
        <div>
            <h2>This is users</h2>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;