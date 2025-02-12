import React, { useContext, useState } from "react";
import taskContext from "../context/tasks/taskContext";
import EditTaskModal from "./EditTaskModal";
import alertContext from "../context/alert/alertContext";

const TaskItem = (props) => {
    const { task } = props;
    const { editTask, deleteTask } = useContext(taskContext);
    const { showAlert } = useContext(alertContext);

    const [newtask, setNewTask] = useState(task);

    const handleToggleCompleted = (e) => {
        setNewTask({ ...task, [e.target.name]: e.target.checked });
        editTask(newtask._id, newtask.title, newtask.description, newtask.tag, String(!newtask.completed));
    };

    const handleDeleteTask = () => {
        deleteTask(task._id);
        showAlert("Deleted successfully!", "success");
    };

    const [currentTask, setCurrenttask] = useState(null);

    const handleOpenModal = (task) => {
        setCurrenttask(task);
    };

    const handleCloseModal = () => {
        setCurrenttask(null);
    };

    return (
        <>
            <div className="shadow-xl m-4 p-2">
                {/* Modal */}
                {currentTask && <EditTaskModal currentTask={currentTask} closeModal={handleCloseModal} />}

                <div className="flex justify-around text-linen">
                    <div className="flex gap-3">
                        <div>
                            <input type="checkbox" className="checkbox border-orange-100 [--chkbg:theme(colors.green)] [--chkfg:linen]" id="completed" name="completed" checked={Boolean(newtask.completed)} onChange={handleToggleCompleted} />
                        </div>
                        <div>
                            <h2 className="font-semibold text-base">
                                {task.title}
                                <span className="badge bg-pink border-none py-3 mx-2 font-normal">{task.tag}</span>
                            </h2>
                            <p className="font-normal">{task.description}</p>
                            <p className="font-light">{new Date(task.timeStamp).toLocaleString()}</p>
                        </div>
                    </div>
                    <div>
                        <i className="fa-regular fa-pen-to-square mx-2 p-2 text-white cursor-pointer hover:rounded-full hover:bg-pink" onClick={() => handleOpenModal(task)}></i>
                        <i className="fa-regular fa-trash-can mx-2 p-2 text-white cursor-pointer hover:rounded-full hover:bg-pink" onClick={handleDeleteTask}></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskItem;
