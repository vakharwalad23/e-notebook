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
    setUsers(userArr);
  }
  useEffect(() => {
    getUserdetails();
  }, [dep])
  return (
    <>
      <section className="vh-30">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">

              <div className="card cprofile" style={{borderRadius: '15px',backgroundColor: props.mode === 'light' ? 'white' : '#25292e',borderColor: props.mode === 'light' ? 'black' : 'grey'}}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img alt='profile-logo' src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' className="rounded-circle img-fluid" style={{width: '100px'}} />
                  </div>
                  <h4 className="mb-2" style={{ color: props.mode === 'light' ? 'black' : '#DDDDDD' }}>{users[1]}</h4>
                  <p className="text-muted mb-4"><a style={{ color: props.mode === 'light' ? 'black' : '#DDDDDD' }} href= 'mailto:xyz@gmail.com'>{users[2]}</a></p>
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