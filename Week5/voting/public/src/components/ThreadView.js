import React, {useContext} from 'react';
import CommentBox from './CommentBox.js';
import IssueThreads from './IssueThreads.js';
import {UserContext} from '../context/UserProvider';


export default function ThreadView(){
  const{selectIssue, addComment, user:{username}, comments, selectIssueThread, issues} = useContext(UserContext)
 

  return (
    <div className="ThreadView">
      <h1>Select an Issue Thread</h1>
      <IssueThreads 
        selectIssueThread={selectIssueThread} 
        comments={comments} 
        username={username} 
        issues={issues}
        />
      <CommentBox 
        selectIssue={selectIssue} 
        addComment={addComment} 
        issues = {issues}
      />
    </div>
  )
}