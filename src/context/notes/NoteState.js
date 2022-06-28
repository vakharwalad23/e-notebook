import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "62b8cd46b50de50360dac3f81",
      "user": "62b74d2e3037ede74bedfc71",
      "title": "First Note",
      "description": "First Note in my api",
      "tag": "personal",
      "date": "2022-06-26T21:19:02.616Z",
      "__v": 0
    },
    {
      "_id": "62b8cd46b50de50360dac3f82",
      "user": "62b74d2e3037ede74bedfc71",
      "title": "Second Note",
      "description": "First Note in my api",
      "tag": "personal",
      "date": "2022-06-26T21:19:02.616Z",
      "__v": 0
    },
    {
      "_id": "62b8cd46b50de50360dac3f83",
      "user": "62b74d2e3037ede74bedfc71",
      "title": "Third Note",
      "description": "First Note in my api",
      "tag": "personal",
      "date": "2022-06-26T21:19:02.616Z",
      "__v": 0
    },
    {
      "_id": "62b8cd46b50de50360dac3f84",
      "user": "62b74d2e3037ede74bedfc71",
      "title": "Fourth Note",
      "description": "First Note in my api",
      "tag": "personal",
      "date": "2022-06-26T21:19:02.616Z",
      "__v": 0
    },
    {
      "_id": "62b8cd46b50de50360dac3f85",
      "user": "62b74d2e3037ede74bedfc71",
      "title": "Fifth Note",
      "description": "First Note in my api",
      "tag": "personal",
      "date": "2022-06-26T21:19:02.616Z",
      "__v": 0
    },
    {
      "_id": "62b8cd46b50de50360dac3f86",
      "user": "62b74d2e3037ede74bedfc71",
      "title": "Sixth Note",
      "description": "First Note in my api",
      "tag": "personal",
      "date": "2022-06-26T21:19:02.616Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
     return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;