import React, { use } from 'react';
import Users from '../Users/Users';

const Users2 = ({usePromise}) => {
    const users=use(usePromise)
    console.log(users);
    return (
        <div>
            <h2>This is 2nd user</h2>
        </div>
    );
};

export default Users2;