import React, { useState } from 'react';

const Add = (props) => {

    const initResult = "";

    const [result, setResult] = useState(initResult);

    const handleChange = e => {
        const { name, value } = e.target;
        setResult({ ...result, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (result.name) {
            const arrayText = result.name.split("\n")
            const responseArray = []
            arrayText.forEach((item, index) => {
                if (item.length > 0) {
                    handleChange(e);
                    responseArray.push({ name: item, id: `id-${index}-${Date.now()}` })
                }
            })
            props.addResult(responseArray)
        }
    }

    return (
        <form>
            <label>Title</label>
            <textarea className="u-full-width" type="text" value={result.name} name="name" onChange={handleChange} style={{ resize: "none" }} />

            <button className="button-primary" type="submit" onClick={handleSubmit} >Add</button>
        </form>
    )
}

export default Add;