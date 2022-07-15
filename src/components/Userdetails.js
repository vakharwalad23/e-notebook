import React from 'react';
import { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";

const Userdetails = (props) => {
  const dep = localStorage.getItem('token');
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
  useEffect(() => {
    getUserdetails()
  }, [dep])
  return (
    <>
            {users.map(user => (
          <div className="btn-group" key='profilebtn'>
            <button type="button" className={`btn dropdown-toggle btn-${props.mode==='light'?'primary':'secondary'}`} data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft:'4px',marginRight:'5px'}}>
            <i className="fa fa-user mx-1" aria-hidden="true" style={{color:props.mode==='light'?'black':'#dee2e6'}}></i>Hello,{user}
            </button>
            <ul className={`dropdown-menu bg-${props.mode==='light'?'light':'dark'}`}>
            <li><Link className="dropdown-item" to="/profile" style={{color:props.mode==='light'?'black':'grey'}}>Profile</Link></li>
            <li><a className="dropdown-item" href="/" style={{color:props.mode==='light'?'black':'grey'}}>TODO</a></li>
              <li><hr className="dropdown-divider" style={{color:props.mode==='light'?'black':'white'}}/></li>
            <li><a className="dropdown-item" href="/" onClick={props.handleLogout} style={{color:props.mode==='light'?'black':'grey'}}>
              Logout
              <i className="fa fa-sign-out fa-lg" onClick={props.handleLogout} style={{color:props.mode==='light'?'black':'grey',marginLeft:'5px',cursor:'pointer'}} aria-hidden="true"></i>
                </a>
                </li>
            </ul>
          </div>
          
      ))}
    </>
  )
}
export default Userdetails