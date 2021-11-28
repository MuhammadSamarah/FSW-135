import React, {useState} from 'react';
import CommentsThread from './CommentsThread';

const initInputs = {issue: "6135901eb1fbbe3c6c297eff"}

export default function IssueThreads(props){
    const [inputs, setInputs] = useState(initInputs)
    const { selectIssueThread, comments, username, issues} = props
    console.log(issues)

    function handleChange(e){
        const{name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs, "chosen")
        selectIssueThread(inputs)
        console.log(selectIssueThread(inputs), "selected")
        setInputs(initInputs)
    }

    const {issue} = inputs
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <p>Choose an Issue:</p>
            <select
                name="issue" 
                value={issue} 
                onChange={handleChange}> 
                {issues.map(primary => (<option value={primary._id}>{primary.topic}</option>))}
            </select>
            <button> View </button>
        </form>
        <CommentsThread comments = {comments} username={username} issues={issues} />
        </div>
    )
}