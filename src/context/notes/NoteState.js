import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  //CURED of notes
  // Get all notes
  const getNotes = async () => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNzRkMmUzMDM3ZWRlNzRiZWRmYzcxIn0sImlhdCI6MTY1NjMyNzQ4N30.BnwizYpZ67yF4KKLCO9soKBPWgrlQELHaOTRMreLqJI'
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }
  // Add a note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNzRkMmUzMDM3ZWRlNzRiZWRmYzcxIn0sImlhdCI6MTY1NjMyNzQ4N30.BnwizYpZ67yF4KKLCO9soKBPWgrlQELHaOTRMreLqJI'
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    console.log(json);

    console.log("Adding a new note");
    const note = {
      "_id": "62b8cd46b50dejgj50360dac3f86",
      "user": "62b74d2e3037ede74bedfc71",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-06-26T21:19:02.616Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  // Delete a note
  const deleteNote = async (id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNzRkMmUzMDM3ZWRlNzRiZWRmYzcxIn0sImlhdCI6MTY1NjMyNzQ4N30.BnwizYpZ67yF4KKLCO9soKBPWgrlQELHaOTRMreLqJI'
      }
    });
    const json = response.json();
    console.log(json);
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }
  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // TODO: API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNzRkMmUzMDM3ZWRlNzRiZWRmYzcxIn0sImlhdCI6MTY1NjMyNzQ4N30.BnwizYpZ67yF4KKLCO9soKBPWgrlQELHaOTRMreLqJI'
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].desdescription = description;
        newNotes[index].tag = tag;
      }
      break;
    }
    setNotes(notes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;