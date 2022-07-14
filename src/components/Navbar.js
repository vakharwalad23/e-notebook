import { React, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Userdetails from './Userdetails';
import ToogleButton from './ToogleButton';
const Navbar = (props) => {
    let navigate = useNavigate();
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        props.showAlert("Successfully Logged Out", "success");
        navigate('/login');
        e.preventDefault();
    }
    let location = useLocation();
    useEffect(() => {
    }, [location]);
    return (
        
        <>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">iNotebook</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                </li>
                            </ul>
                            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                                <Link className='mt-2 mx-2' to="/login" role="button"><i className="fa fa-sign-in fa-lg" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"></i></Link>
                                <Link className="mt-2 mx-2" to="/signup" role="button"><i className="fa fa-user-plus fa-lg" style={{color:props.mode==='light'?'black':'grey'}} aria-hidden="true"></i></Link>
                            </form> : <div><Userdetails toggleMode={props.toggleMode} handleLogout={handleLogout} mode={props.mode}/></div>}
                                <ToogleButton toggleMode={props.toggleMode} mode={props.mode}/>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar