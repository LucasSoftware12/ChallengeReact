import React, {useState, useEffect} from 'react';

const Edit = (props) => {

    useEffect(() => {
        setResult(props.currentResult)
    }, [props])

    const [result, setResult] = useState(props.currentResult);

    const handleChange = e => {
        const {name, value} = e.target;
        setResult({...result, [name]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (result.name) props.updated(result);
    }

    return (
        <form>
            <label>Text</label>
            <input className="u-full-width" type="text" value={result.name} name="name" onChange={handleChange} />
            
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit result</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default Edit;