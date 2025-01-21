import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
    const { note } = props;
    const { deleteNote } = useContext(noteContext);

    const handleDeleteNote = () =>{
        deleteNote(note._id)
    }


    return (
        <div className="card w-80 shadow-xl m-4">
            <div className="card-body bg-linen">
                <h2 className="card-title">{note.title}</h2>
                <p>{note.description}</p>
                <p className="font-light" >{
                    new Date(note.timeStamp).toLocaleString()
                    }</p>
                <div className="card-actions justify-end">
                    <div className="badge bg-pink border-none py-3">{note.tag}</div>
                </div>
                <div className="flex">
                    <i className="fa-regular fa-pen-to-square mx-2 p-2 cursor-pointer hover:rounded-full hover:bg-pink hover:text-white"></i>
                    <i className="fa-regular fa-trash-can mx-2 p-2 cursor-pointer hover:rounded-full hover:bg-pink hover:text-white" onClick={handleDeleteNote}></i>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
