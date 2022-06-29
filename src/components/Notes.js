import React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import AddNote from './AddNote';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const [note, setNote] = useState({etitle: "", edescription: "", etag: ""});
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle: currentNote.title , edescription: currentNote.description, etag: currentNote.tag});
  }
  const handleClick = (e)=>{
    console.log("Updating", note);
    e.preventDefault();
  }
  const onChange = (e)=> {
    setNote({...note, [e.target.name]: e.target.value})
  }
  return (
    <>
      <AddNote />
      <button style={{display:"none"}} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="container my-3">
                  <h2>Add a Note</h2>
                  <form className='my-2'>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} value={note.etitle}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <input type="text" className="form-control" id="edescription" name='edescription' onChange={onChange} value={note.edescription}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tag" className="form-label">Tag</label>
                      <input type="text" className="form-control" id="etag" name='etag' onChange={onChange} value={note.etag}/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes