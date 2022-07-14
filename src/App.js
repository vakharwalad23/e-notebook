import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  const [Mode, setMode] = useState('light');//Shows if dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#25292e';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar mode={Mode} toggleMode={toggleMode} showAlert={showAlert}/>
          <Alert alert={alert}/>
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<Home mode={Mode} toggleMode={toggleMode} showAlert={showAlert}/>}>
              </Route>
              <Route exact path="/about" element={<About mode={Mode} />}>
              </Route>
              <Route exact path="/login" element={<Login mode={Mode} showAlert={showAlert}/>}>
              </Route>
              <Route exact path="/signup" element={<Signup mode={Mode} showAlert={showAlert}/>}>
              </Route>
              <Route exact path="/profile" element={<Profile />}>
              </Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
