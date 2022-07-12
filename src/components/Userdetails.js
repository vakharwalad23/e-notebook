import React from 'react';
import { useEffect, useState } from 'react';

const Userdetails = () => {
  const [users, setUsers] = useState([])
  const getUserdetails = async () => {
    const host = "http://localhost:5000";
    // TODO: API Call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const data = await response.json();
    const userArr = Object.values(data);
    setUsers([userArr[1]]);
  }
  useEffect(()=>{
    getUserdetails()
  },[])
  return(
    <>
    {users.map(user => (
      <div className='btn btn-default active' key='1'>UserName:{user}</div>
    ))} 
    </>
  )
}
export default Userdetails