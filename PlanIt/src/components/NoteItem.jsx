import React from "react";

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="card bg-base-100 w-96 shadow-xl m-4">
            <div className="card-body bg-linen">
                <h2 className="card-title">
                    {note.title}    
                </h2>
                <p>{note.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge bg-pink border-none py-3">{note.tag}</div>
                </div>
                <div className="flex">

                <i className="fa-regular fa-pen-to-square mx-2 p-2 hover:rounded-full hover:bg-pink hover:text-white"></i>
                <i className="fa-regular fa-trash-can mx-2 p-2 hover:rounded-full hover:bg-pink hover:text-white"></i>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
