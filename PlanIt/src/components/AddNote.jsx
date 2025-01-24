import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";
import alertContext from "../context/alert/alertContext";

const AddNote = () => {
    const { addNote } = useContext(noteContext);
    const {showAlert} = useContext(alertContext)

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleAddNote = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag);
        showAlert("Added successfullly!", "success")
        setNote({ title: "", description: "", tag: "" });
    };

    const onChangeInput = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex justify-center">
            <div style={{ width: "50%" }}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="input input-bordered flex items-center gap-2">
                        <input type="text" id="title" name="title" className="grow" placeholder="Title" value={note.title} onChange={onChangeInput} minLength={3} required />
                    </label>
                    <label htmlFor="description" className="flex items-center gap-2">
                        <textarea placeholder="Description" id="description" name="description" className="textarea textarea-bordered textarea-md w-full" value={note.description} onChange={onChangeInput} minLength={5} required ></textarea>
                    </label>
                    <label htmlFor="tag" className="input input-bordered flex items-center gap-2">
                        <input type="text" id="tag" name="tag" className="grow" placeholder="Tag" value={note.tag} onChange={onChangeInput}/>
                    </label>
                    <div className="text-center">
                        <button disabled={note.title.length < 3 || note.description.length < 5 } className="btn bg-green" onClick={handleAddNote}>
                            Add Note
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
