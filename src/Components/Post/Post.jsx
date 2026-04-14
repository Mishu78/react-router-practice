import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id,title}=post;
    const navigate = useNavigate();
    
        const handleNavigate=()=>{
            navigate('/posts/${id}')
        };
    const postStyle={
        margin:'20px',
        padding:"20px",
        border:"2px solid black",
        borderRadius:"20px"
        }
    return (
        <div style={postStyle}>
           <h3>id:{id}</h3> 
           <h3>title:{title}</h3> 
           <Link to={`/posts/${id}`}>
           <button>Show details</button></Link>
           <button onClick={handleNavigate}>Details of : {id}</button>
        </div>
    );
};

export default Post;