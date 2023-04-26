import {React, useState, useEffect} from 'react'
import TableView2 from './TableView2';
import axios from 'axios'

const Top10Cities = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false)
    useEffect( () => {
      setLoading(true)
        const getUsers = async ()=>{
            await axios.get('http://localhost:8080/api/v1/route5')
        .then(res => {
            setUsers(res.data);
            console.log(res.data)
            setLoading(false)
        })
        .catch(err => {console.log(err)
          setLoading(false)
        });
        }
        getUsers();
    }, []);

  return (
    <>
    {isLoading ?<h1>Loading...</h1>: <TableView2 users={users}/>}
    </>
  )
}

export default Top10Cities