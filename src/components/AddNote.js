import React from 'react';
import { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props)=> {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""});
  const handleClick = (e)=>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""});
    props.showAlert("Added Successfully", "success");
  }
  const onChange = (e)=> {
    setNote({...note, [e.target.name]: e.target.value})
  }
  return (
    <div>
      <div className="container my-3">
        <h2 style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Add a Note</h2>
        <form className='my-2'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Title</label>
            <input value={note.title} type="text" className={`form-control bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD' }} id="title" name='title' aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Description</label>
            <textarea rows="3" value={note.description} type="text" className={`form-control text1 bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD' }} id="description" name='description' onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3"> 
            <label htmlFor="tag" className="form-label" style={{color:props.mode==='light'?'black':'#DDDDDD'}}>Tag</label>
            <input value={note.tag} type="text" className={`form-control bg-${props.mode==='light'?'light':'dark'}`} style={{color:props.mode==='light'?'black':'#DDDDDD' }} id="tag" name='tag' onChange={onChange}/>
          </div>
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className={`btn btn-${props.mode==='light'?'primary':'secondary'}`} onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote