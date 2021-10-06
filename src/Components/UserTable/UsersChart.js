// This UsersChart component completes the datatable component by adding a search bar and passing API json data to the datatable component
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DataTable from './DataTable.js';
import './UsersChart.css';

function UserList() {
    const url = 'https://6155a05293e3550017b08b11.mockapi.io/users';
    const [users, setUsers] = useState([]);
    const [search, setSearch] = React.useState('');

    useEffect(()=> {
        //By using this Hook, you tell React that your component needs to do something after render
        //after url changes, the code in the useEffect() will run/ re-run
        axios.get(`${url}`)
        .then(res => {
            setUsers(res.data);
            console.log(users);
        })
        .catch(err => {
            console.log(err);
        })
        
    }, [url])


    function searchData(rows){
        const columns = rows[0] && Object.keys(rows[0]);
        return rows.filter((row) =>
            columns.some(
                (column) => row[column].toString().toLowerCase().indexOf(search.toLowerCase())>-1)
        );
    }

    return (

        <div className='Datatable'>

            <label>Search: </label>
            <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>

        <DataTable data={searchData(users)}/>
        
    </div>
    )
}

export default UserList; 

