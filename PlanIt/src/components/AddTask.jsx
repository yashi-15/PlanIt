import React, { useState, useContext, useEffect, useRef } from "react";
import taskContext from "../context/tasks/taskContext";
import alertContext from "../context/alert/alertContext";

const AddTask = () => {
    const { addTask } = useContext(taskContext);
    const { showAlert } = useContext(alertContext);

    const [task, setTask] = useState({ title: "", description: "", tag: "" });
    const [addTaskOpen, setAddTaskOpen] = useState(false)

    const handleAddTask = (e) => {
        e.preventDefault();
        addTask(task.title, task.description, task.tag);
        showAlert("Added successfullly!", "success");
        setTask({ title: "", description: "", tag: "" });
    };

    const onChangeInput = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const addTaskBtn = useRef();

    useEffect(() => {
        if (addTaskOpen) {
            // Hide the add task button
            addTaskBtn.current.style.display = "none";
        } else {
            // Show the add task button
            addTaskBtn.current.style.display = "block";
        }
    }, [addTaskOpen]);

    return (
        <>
            <div className="flex justify-center">
                    <div className="flex flex-col">
                        <button className="m-4 p-3 hover:text-pink text-xl" ref={addTaskBtn} onClick={()=> setAddTaskOpen(true)}><i className="fa-solid fa-circle-plus"></i> Add Task</button>
                        {addTaskOpen === true &&
                        <div className="flex flex-col gap-2" style={{width: "45vw"}}>
                            <label htmlFor="title" className="input input-bordered flex items-center gap-2 bg-gray">
                                <input type="text" id="title" name="title" className="grow" placeholder="Title" value={task.title} onChange={onChangeInput} minLength={3} required />
                            </label>
                            <label htmlFor="description" className="flex items-center gap-2">
                                <textarea placeholder="Description" id="description" name="description" className="textarea textarea-bordered textarea-md w-full bg-gray" value={task.description} onChange={onChangeInput} minLength={5} required></textarea>
                            </label>
                            <label htmlFor="tag" className="input input-bordered flex items-center gap-2 bg-gray">
                                <input type="text" id="tag" name="tag" className="grow" placeholder="Tag" value={task.tag} onChange={onChangeInput} />
                            </label>
                            <div className="text-center">
                                <button className="btn bg-green hover:bg-lightgreen border-none m-1" style={{ color: "white" }} onClick={() => setAddTaskOpen(false)}>
                                    Cancel
                                </button>
                                <button disabled={task.title.length < 3 || task.description.length < 5} className="btn bg-pink hover:bg-linen border-none m-1" style={{ color: "black" }} onClick={handleAddTask}>
                                    Add Task
                                </button>
                            </div>
                        </div>}
                    </div>
                </div>
        </>
    );
};

export default AddTask;
