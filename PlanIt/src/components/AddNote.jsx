import React from "react";

const AddNote = () => {
    return (
        <div className="flex justify-center">
            <div style={{ width: "50%" }}>
                <div className="flex flex-col gap-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Title" />
                    </label>
                    <textarea placeholder="Description" class="textarea textarea-bordered textarea-md w-full"></textarea>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Tag" />
                    </label>
                    <div className="text-center">
                        <button className="btn bg-green">Add Note</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
