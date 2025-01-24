import React, {useContext, useEffect, useState} from "react";
import noteContext from "../context/notes/noteContext";
import alertContext from "../context/alert/alertContext";

const EditNoteModal = (props) => {
    const {currentNote, closeModal} = props;
    const [note, setNote] = useState({ id: currentNote._id , etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });

    const { editNote } = useContext(noteContext);
    const {showAlert} = useContext(alertContext)

    const handleEditNote = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        closeModal()
        showAlert("Updated successfullly!", "success")
    };

    const onChangeInput = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        document.getElementById("editNoteModal").showModal()
        
},[])

    return (
        <div>
            <dialog id="editNoteModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Edit note!</h3>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="etitle" className="input input-bordered flex items-center gap-2">
                            <input type="text" id="etitle" name="etitle" className="grow" placeholder="Title" value={note.etitle} onChange={onChangeInput} minLength={3} required />
                        </label>
                        <label htmlFor="edescription" className="flex items-center gap-2">
                            <textarea placeholder="Description" id="edescription" name="edescription" className="textarea textarea-bordered textarea-md w-full" value={note.edescription} onChange={onChangeInput} minLength={5} required ></textarea>
                        </label>
                        <label htmlFor="etag" className="input input-bordered flex items-center gap-2">
                            <input type="text" id="etag" name="etag" className="grow" placeholder="Tag" value={note.etag} onChange={onChangeInput} />
                        </label>
                        <div className="text-center">
                            <button disabled={note.etitle.length < 3 || note.edescription.length < 5 } className="btn bg-green" onClick={handleEditNote}>
                                Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default EditNoteModal;
