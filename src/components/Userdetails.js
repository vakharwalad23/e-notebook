import React from 'react';

const Userdetails = async () => {
  const host = "http://localhost:5000";
    // TODO: API Call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const name = response.name;
  return (
    <div className='btn btn-default active'>{name}</div>
  )
}

export default Userdetails