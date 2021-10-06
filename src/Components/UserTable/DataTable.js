import React from "react";

function UserTable({data}){
    const columns = data[0] && Object.keys(data[0]);
    return (
        <table cellPadding={6} cellSpacing={6}>
            <thead>
                <tr>{data[0] && columns.slice(0,4).map((heading, index)=> <th key={index}>{heading}</th>)}</tr>
            </thead>

            <tbody>
                {data.slice(0,7).map((row, index) => (
                    <tr key={index}>
                        {columns.slice(0,4).map((column)=> (
                           
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable; 