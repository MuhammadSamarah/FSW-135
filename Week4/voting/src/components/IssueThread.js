import React, {useState} from 'react';
import CommentsThread from './CommentsThread';

const initInputs = {issue: "61257ec2f9f28148f8852edf"}

export default function IssueThreads(props){
    const [inputs, setInputs] = useState(initInputs)
    const { selectIssue, selectIssueThread, comments, username} = props

    function handleChange(e){
        const{name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        selectIssue(inputs)
        selectIssueThread(inputs)
        setInputs(initInputs)
    }

    const {issue} = inputs
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label for="issue">Choose an Issue:</label>
            <select
                name="issue" 
                value={issue} 
                onChange={handleChange}> 
                <option value="61233946dba4c6356ca17797">Voting Rights</option>
                <option value="61233969dba4c6356ca17799">Term Limits</option>
                <option value="61233931dba4c6356ca17793">Social Security</option>
                <option value="61233939dba4c6356ca17795">Property Taxes</option>
            </select>
            <button> View </button>
        </form>
        <CommentsThread comments = {comments} username={username} />
        </div>
    )
}