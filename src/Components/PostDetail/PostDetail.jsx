import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post=useLoaderData();
    const navigate=useNavigate();
    return (
        <div>
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <h2>{post.body}</h2>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetail;