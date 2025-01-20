import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "678d31bae084c4853db994b6",
          "user": "678cd1cea716ec6a39ee9781",
          "title": "Temporaray note 1",
          "description": "Learn MERN stack",
          "tag": "skill development",
          "timeStamp": "2025-01-19T17:09:14.399Z",
          "__v": 0
        },
        {
          "_id": "678e7765ee0ae025d1d0bff6",
          "user": "678cd1cea716ec6a39ee9781",
          "title": "Hello",
          "description": "hello this is my new note",
          "tag": "temp",
          "timeStamp": "2025-01-20T16:18:45.676Z",
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