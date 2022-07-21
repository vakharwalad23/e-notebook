import React, {useState} from 'react';
const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"", email: "", password:"", cpassword:"", mobileno:"", gender:"", birthdate:"", bio:""});
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name, email, password, mobileno, gender, birthdate, bio} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password, bio, birthdate, gender, mobileno})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('name', json.name);
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
          <h1 className='text-center my-2' style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <i className="fa fa-user mx-1" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"/>
                    <label htmlFor="name" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Name</label>
                    <input type="text" className={`form-control bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD'}} id="name" name='name' onChange={onChange} aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <i className="fa fa-calendar mx-1" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"/>
                    <label htmlFor="birthdate" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Birthdate</label>
                    <input type="date" className={`form-control bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD'}} id="birthdate" name='birthdate' onChange={onChange} aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                  <div class="form-check">
                    <label htmlFor="male" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Male</label>
                    <input htmlFor="male" className={`showpass form-check-input bg-${props.mode==='light'?'':'dark'}`} type="checkbox" value="male" id="male" name='gender' onChange={onChange} aria-describedby="emailHelp"/>
                  </div>
                  <div class="form-check">
                  <label htmlFor="female" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Female</label>
                    <input htmlFor="female" className={`showpass form-check-input bg-${props.mode==='light'?'':'dark'}`} type="checkbox" value="fe-male" id="female" name='gender' onChange={onChange} aria-describedby="emailHelp"/>
                  </div>
                </div>
                <div className="mb-3">
                <i className="fa fa-envelope mx-1" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"></i>
                    <label htmlFor="email" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Email address</label>
                    <input type="email" className={`form-control email bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD'}} id="email" name='email' onChange={onChange} aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never diclose your email.</div>
                </div>
                <div className="mb-3">
                    <i className="fa fa-mobile mx-1" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"/>
                    <label htmlFor="mobileno" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Mobile-Number</label>
                    <input type="text" className={`form-control bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD'}} id="mobileno" name='mobileno' onChange={onChange} aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <i className="fa fa-info mx-1" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"/>
                    <label htmlFor="bio" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Bio</label>
                    <input type="text" className={`form-control bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD'}} id="bio" name='bio' onChange={onChange} aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <i className="fa fa-key mx-1" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"></i>
                    <label htmlFor="password" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Password</label>
                    <input type="password" className={`form-control pass bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD'}} id="password" name='password' onChange={onChange} minLength='8' required />
                </div>
                <div className="mb-3 form-check">
              <input type="checkbox" className={`form-check-input showpass bg-${props.mode==='light'?'none':'dark'}`} style={{borderColor:props.mode==='light'?'black':'white'}} id="exampleCheck1" onClick={handleShowpass}/>
                <label className="form-check-label" htmlFor="exampleCheck1" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Check me out</label>
            </div>
                <div className="mb-3">
                <i className="fa fa-key mx-1" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"></i>
                    <label htmlFor="cpassword" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Confirm Password</label>
                    <input type="password" className={`form-control pass bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD'}} id="cpassword" name='cpassword' onChange={onChange} minLength='8' required/>
                </div>
                <div className="mb-3 form-check">
              <input type="checkbox" className={`form-check-input showpass bg-${props.mode==='light'?'none':'dark'}`} style={{borderColor:props.mode==='light'?'black':'white'}} id="exampleCheck2" onClick={handleShocwpass}/>
                <label className="form-check-label" htmlFor="exampleCheck2" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Check me out</label>
            </div>
                <button type="submit" id='btn' className={`btn btn-${props.mode==='light'?'primary':'secondary'}`}>Submit</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default Signup