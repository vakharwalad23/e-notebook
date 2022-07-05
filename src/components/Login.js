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
          <h1 className='text-center mb-3'>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <i className="fa fa-envelope mx-1" aria-hidden="true"></i>
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" onChange={onChange} value={credentials.email} className="form-control" id="email" name='email' aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never disclose your email.</div>
            </div>
            <div className="mb-3">
            <i className="fa fa-key mx-1" aria-hidden="true"></i>
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" onChange={onChange} value={credentials.password} className="form-control" id="password" name='password' />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={handleShowpass}/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login