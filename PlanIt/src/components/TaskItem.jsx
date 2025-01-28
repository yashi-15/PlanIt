import React, { useContext, useState } from "react";
import taskContext from "../context/tasks/taskContext";
import EditTaskModal from "./EditTaskModal";
import alertContext from "../context/alert/alertContext";

const TaskItem = (props) => {
    const { task } = props;
    const { deleteTask } = useContext(taskContext);
    const {showAlert} = useContext(alertContext)

    const handleDeleteTask = () => {
        deleteTask(task._id);
        showAlert("Deleted successfully!", "success")
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
            <div className="card w-80 shadow-xl m-4">
                
            {/* Modal */}
            {currentTask && <EditTaskModal currentTask={currentTask} closeModal={handleCloseModal} /> }


                <div className="card-body bg-linen">
                    <h2 className="card-title text-black">{task.title}</h2>
                    <p className="text-black">{task.description}</p>
                    <p className="font-light text-black">{new Date(task.timeStamp).toLocaleString()}</p>
                    <div className="card-actions justify-end">
                        <div className="badge bg-pink border-none py-3">{task.tag}</div>
                    </div>
                    <div className="flex">
                        <i className="fa-regular fa-pen-to-square mx-2 p-2 text-black cursor-pointer hover:rounded-full hover:bg-pink hover:text-white" onClick={() => handleOpenModal(task)}></i>
                        <i className="fa-regular fa-trash-can mx-2 p-2 text-black cursor-pointer hover:rounded-full hover:bg-pink hover:text-white" onClick={handleDeleteTask}></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskItem;
