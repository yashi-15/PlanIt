import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import EditNoteModal from "./EditNoteModal";
import alertContext from "../context/alert/alertContext";

const NoteItem = (props) => {
    const { note } = props;
    const { deleteNote } = useContext(noteContext);
    const {showAlert} = useContext(alertContext)

    const handleDeleteNote = () => {
        deleteNote(note._id);
        showAlert("Deleted successfully!", "success")
    };

    const [currentNote, setCurrentnote] = useState(null);

    const handleOpenModal = (note) => {
        setCurrentnote(note);
    };

    const handleCloseModal = () => {
        setCurrentnote(null);
    };

    return (
        <>
            <div className="card w-80 shadow-xl m-4">
                
            {/* Modal */}
            {currentNote && <EditNoteModal currentNote={currentNote} closeModal={handleCloseModal} /> }


                <div className="card-body bg-linen">
                    <h2 className="card-title text-black">{note.title}</h2>
                    <p className="text-black">{note.description}</p>
                    <p className="font-light text-black">{new Date(note.timeStamp).toLocaleString()}</p>
                    <div className="card-actions justify-end">
                        <div className="badge bg-pink border-none py-3">{note.tag}</div>
                    </div>
                    <div className="flex">
                        <i className="fa-regular fa-pen-to-square mx-2 p-2 text-black cursor-pointer hover:rounded-full hover:bg-pink hover:text-white" onClick={() => handleOpenModal(note)}></i>
                        <i className="fa-regular fa-trash-can mx-2 p-2 text-black cursor-pointer hover:rounded-full hover:bg-pink hover:text-white" onClick={handleDeleteNote}></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoteItem;
