import React from 'react'
import Comment from './comment'

export default function CommentsThread(props){
  const { comments, username, issues} = props 

  return (
    <div className="comments">
       { comments.map(comment => <Comment username={username} issues={issues} {...comment} key={comment._id}/>) } 
    </div>
  )
}