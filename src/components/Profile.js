import React from 'react';
import { useEffect, useState } from 'react';

const Profile = (props) => {
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
    console.log(userArr);
    setUsers(userArr);
  }
  useEffect(() => {
    getUserdetails();
  }, [dep])
  return (
    <>
      <section>
      <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0" style={{borderRadius: ".5rem",borderColor:props.mode==='light'?' ':'grey'}}>
        <div className="card mb-3" style={{borderRadius: ".5rem", borderColor:props.mode==='light'?' ':'grey' ,backgroundColor:props.mode==='light'?'':'#25292e'}}>
          <div className="row g-0">
            <div className="col-md-4 gradient-custom text-center text-white"
              style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem"}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" className="img-fluid my-5" style={{width: "80px"}} />
              <h5>{users[1]}</h5>
              <p>{users[5]}</p>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4" style={{backgroundColor:props.mode==='light'?'':'#25292e', color:props.mode==='light'?'black':'#DDDDDD', borderRadius: ".5rem", borderColor:props.mode==='light'?' ':'grey'}}>
                <h6>Contact Information</h6>
                <hr className="mt-0 mb-4"/>
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text" style={{color:props.mode==='light'?'black':'#b2bdc8'}}>{users[2]}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text" style={{color:props.mode==='light'?'black':'#b2bdc8'}}>{users[4]}</p>
                  </div>
                </div>
                <h6>Personal Information</h6>
                <hr className="mt-0 mb-4"/>
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Birthdate</h6>
                    <p className="text" style={{color:props.mode==='light'?'black':'#b2bdc8'}}>{users[3]}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Gender</h6>
                    <p className="text" style={{color:props.mode==='light'?'black':'#b2bdc8'}}>{users[6]}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                <p><i class="fa fa-copyright fa-sm" style={{color:'#4267B2'}} aria-hidden="true"/>Copyright iNotebook-2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Profile