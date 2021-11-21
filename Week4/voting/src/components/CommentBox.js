import React, {useState} from 'react';

const initInputs = {issue: "61257ec2f9f28148f8852edf", body: ""}

export default function CommentBox(props){
    const [inputs, setInputs] = useState(initInputs)
    const { addComment } = props

    function handleChange(e){
        const{name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment(inputs)
        setInputs(initInputs)
    }

    const {issue, body} = inputs
    return(
        <form onSubmit={handleSubmit}>
            <label for="issue">Choose an Issue:</label>
            <select
                name="issue" 
                value={issue} 
                onChange={handleChange}> 
                <option value="61257ec2f9f28148f8852edf">Women's Rights</option>
                <option value="61233946dba4c6356ca17797">Voting Rights</option>
                <option value="61233969dba4c6356ca17799">Term Limits</option>
                <option value="61233931dba4c6356ca17793">Social Security</option>
                <option value="61233939dba4c6356ca17795">Property Taxes</option>
            </select>

            <input 
                type="text" 
                name="body" 
                value={body} 
                onChange={handleChange} 
                placeholder="Comment"/>
            <button>Comment</button>
        </form>
    )

}