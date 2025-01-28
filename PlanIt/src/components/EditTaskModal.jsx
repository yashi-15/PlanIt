import React, {useContext, useEffect, useState} from "react";
import taskContext from "../context/tasks/taskContext";
import alertContext from "../context/alert/alertContext";

const EditTaskModal = (props) => {
    const {currentTask, closeModal} = props;
    const [task, setTask] = useState({ id: currentTask._id , etitle: currentTask.title, edescription: currentTask.description, etag: currentTask.tag });

    const { editTask } = useContext(taskContext);
    const {showAlert} = useContext(alertContext)

    const handleEditTask = (e) => {
        editTask(task.id, task.etitle, task.edescription, task.etag)
        closeModal()
        showAlert("Updated successfullly!", "success")
    };

    const onChangeInput = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        document.getElementById("editTaskModal").showModal()
        
},[])

    return (
        <div>
            <dialog id="editTaskModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Edit task!</h3>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="etitle" className="input input-bordered flex items-center gap-2">
                            <input type="text" id="etitle" name="etitle" className="grow" placeholder="Title" value={task.etitle} onChange={onChangeInput} minLength={3} required />
                        </label>
                        <label htmlFor="edescription" className="flex items-center gap-2">
                            <textarea placeholder="Description" id="edescription" name="edescription" className="textarea textarea-bordered textarea-md w-full" value={task.edescription} onChange={onChangeInput} minLength={5} required ></textarea>
                        </label>
                        <label htmlFor="etag" className="input input-bordered flex items-center gap-2">
                            <input type="text" id="etag" name="etag" className="grow" placeholder="Tag" value={task.etag} onChange={onChangeInput} />
                        </label>
                        <div className="text-center">
                            <button disabled={task.etitle.length < 3 || task.edescription.length < 5 } className="btn bg-green" onClick={handleEditTask}>
                                Update Task
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default EditTaskModal;
