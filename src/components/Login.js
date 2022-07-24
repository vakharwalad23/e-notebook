import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/');
      props.showAlert("Logged In Successfully", "success");
    }
    else {
      props.showAlert("Invalid Email or Password", "danger");
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleShowpass = ()=>{
    const pass = document.getElementById("password");
    if(pass.type === "password"){
      pass.type = "text";
    }
    else{
      pass.type = "password";
    }
  }
  return (
    <>
      <div className="container h-100 w-50 my-5">
        <div className='row h-100 justify-content-center align-items-center'>
          <h1 className='text-center mb-3' style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <i className="fa fa-envelope mx-1" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"></i>
              <label htmlFor="email" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Email address</label>
              <input autoComplete="off" type="email" onChange={onChange} value={credentials.email} className={`form-control email bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD'}} id="email" name='email' aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never disclose your email.</div>
            </div>
            <div className="mb-3">
            <i className="fa fa-key mx-1" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"></i>
              <label htmlFor="password" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Password</label>
              <input autoComplete="off" type="password" onChange={onChange} value={credentials.password} className={`form-control pass bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD'}} id="password" name='password' />
            </div>
            <div className="mb-3 form-check">
              <input autoComplete="off" type="checkbox" className={`form-check-input showpass bg-${props.mode==='light'?'none':'dark'}`} style={{borderColor:props.mode==='light'?'black':'white'}} id="exampleCheck1" onClick={handleShowpass}/>
                <label className="form-check-label" htmlFor="exampleCheck1" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Check me out</label>
            </div>
            <button type="submit" className={`btn btn-${props.mode==='light'?'primary':'secondary'}`}>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login