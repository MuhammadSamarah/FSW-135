import React from 'react';


export default function Comment(props){
    const {username, body, datePosted, issues, issue} = props

    var Title = issues.filter(primary => issue === primary._id)
    console.log(Title, "title")
    return(
        <div className="comment">
            <h1>{Title[0].topic}</h1>
            <p>{body}</p>
            <h5>Written by: {username} on {datePosted} </h5>
        </div>
    )
}