import React from 'react'
import Comment from './comment'

export default function CommentsThread(props){
  const { comments, username } = props 

  return (
    <div className="comments">
       { comments.map(comment => <Comment username={username}  {...comment} key={comment._id}/>) } 
    </div>
  )
}