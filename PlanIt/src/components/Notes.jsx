import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
    
    const navigate = useNavigate();

    const { notes, getNotes } = useContext(noteContext);
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            navigate("/login")
        }
    }, []);

    return (
        <>
            <AddNote />
            <div className="flex justify-center">
                <div className="">
                    <h1 className="text-center"> My notes</h1>
                    <p>{notes.length === 0 && "No notes to display"}</p>
                    <div className="grid grid-cols-4 gap-3 justify-items-center px-5 mx-auto">
                        {notes.map((note) => {
                            return <NoteItem key={note._id} note={note} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notes;
