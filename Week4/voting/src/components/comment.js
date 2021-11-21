import React from 'react';

export default function Comment(props){
    const {username,  body, datePosted} = props
    return(
        <div className="comment">
            <h1>FIX ME</h1>
            <p>{body}</p>
            <h5>Written by: {username} on {datePosted} </h5>
        </div>
    )
}