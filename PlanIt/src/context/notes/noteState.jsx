import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const [notes, setNotes] = useState([]);

    //Get all notes
    const getNotes = async () => {
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4Y2QxY2VhNzE2ZWM2YTM5ZWU5NzgxIn0sImlhdCI6MTczNzI4MjA1N30.up9BDJABZpBmmhCBPrInQeEg6bO_y-gWuQ971qLhB_A",
            },
        });
        const json = await response.json();
        setNotes(json);
    };

    // Add a note
    const addNote = async (title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4Y2QxY2VhNzE2ZWM2YTM5ZWU5NzgxIn0sImlhdCI6MTczNzI4MjA1N30.up9BDJABZpBmmhCBPrInQeEg6bO_y-gWuQ971qLhB_A",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log(json);

        //logic to edit on client side
        setNotes(notes.concat(json));
    };

    // Delete a note
    const deleteNote = async (id) => {
        //API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4Y2QxY2VhNzE2ZWM2YTM5ZWU5NzgxIn0sImlhdCI6MTczNzI4MjA1N30.up9BDJABZpBmmhCBPrInQeEg6bO_y-gWuQ971qLhB_A",
            },
        });
        const json = await response.json();
        console.log(json);

        //logic to edit on client side
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes(newNotes);
    };

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4Y2QxY2VhNzE2ZWM2YTM5ZWU5NzgxIn0sImlhdCI6MTczNzI4MjA1N30.up9BDJABZpBmmhCBPrInQeEg6bO_y-gWuQ971qLhB_A",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log(json);

        //logic to edit on client side
        const newNotes = JSON.parse(JSON.stringify(notes))
        for (let i = 0; i < newNotes.length; i++) {
            const note = newNotes[i];
            if (note._id == id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    };

    return <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
