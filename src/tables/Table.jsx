import React from 'react';

const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.results.length > 0 ? (
                    props.results.map((result, index) => {
                        const { id, name } = result;
                        return (
                            <tr key={id}>
                                <td>{index}</td>
                                <td>{name}</td>

                                <td>
                                    <button onClick={() => props.deleted(id)}>Delete</button>
                                    <button onClick={() => props.edited(id, result)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No texts found</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}

export default Table;