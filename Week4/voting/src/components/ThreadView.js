import React, {useContext} from 'react';
import CommentBox from './CommentBox.js';
import IssueThreads from './IssueThreads.js';
import {UserContext} from '../context/UserProvider';


export default function ThreadView(){
  const{selectIssue, addComment, user:{username}, comments, selectIssueThread} = useContext(UserContext)
 

  return (
    <div className="ThreadView">
      <h1>Select an Issue Thread</h1>
      <IssueThreads 
        selectIssue={selectIssue}
        selectIssueThread={selectIssueThread} 
        comments={comments} 
        username={username} />
      <CommentBox 
        selectIssue={selectIssue} 
        addComment={addComment} 

      />
    </div>
  )
}