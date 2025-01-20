import React from "react";

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="card bg-base-100 w-96 shadow-xl m-4">
            <div className="card-body">
                <h2 className="card-title">
                    {note.title}    
                </h2>
                <p>{note.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-secondary">{note.tag}</div>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
