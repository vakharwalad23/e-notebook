import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "62b8cd46b50de50360dac3f8",
      "user": "62b74d2e3037ede74bedfc71",
      "title": "First Note",
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