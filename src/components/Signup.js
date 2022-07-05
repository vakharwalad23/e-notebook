import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"", email: "", password:"", cpassword:""});
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('name', json.name);
            navigate('/login');
            props.showAlert("Account Created Successfully", "success");
          }
          else{
            props.showAlert("Invalid Credentials", "danger");
          }
    }
    const onChange = (e)=> {
        setCredentials({...credentials, [e.target.name]: e.target.value})
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
      const handleShocwpass = ()=>{
        const pass = document.getElementById("cpassword");
        if(pass.type === "password"){
          pass.type = "text";
        }
        else{
          pass.type = "password";
        }
      }
    return (
        <>
        <div className="container h-100 w-50 my-3">
        <div className='row justify-content-center align-items-center'>
          <h1 className='text-center my-2'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <i className="fa fa-user mx-1" aria-hidden="true"/>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                <i className="fa fa-envelope mx-1" aria-hidden="true"></i>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never diclose your email.</div>
                </div>
                <div className="mb-3">
                    <i className="fa fa-key mx-1" aria-hidden="true"></i>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength='8' required />
                </div>
                <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={handleShowpass}/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
                <div className="mb-3">
                <i className="fa fa-key mx-1" aria-hidden="true"></i>
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength='8' required/>
                </div>
                <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck2" onClick={handleShocwpass}/>
                <label className="form-check-label" htmlFor="exampleCheck2">Check me out</label>
            </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default Signup