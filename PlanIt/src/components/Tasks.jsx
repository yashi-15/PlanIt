import React, { useContext, useEffect } from "react";
import taskContext from "../context/tasks/taskContext";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
    
    const navigate = useNavigate();

    const { tasks, getTasks } = useContext(taskContext);
    useEffect(() => {
        if(localStorage.getItem('token')){
            getTasks();
        }
        else{
            navigate("/login")
        }
    }, []);

    return (
        <>
            <AddTask />
            <div className="flex flex-col divide-y-2 divide-y-reverse divide-gray-500 justify-items align-middle-center w-full my-2 mx-5">
                    <p>{tasks.length === 0 && "No tasks to display"}</p>
                        {tasks.map((task) => {
                            return <TaskItem key={task._id} task={task} />;
                        })}
            </div>
        </>
    );
};

export default Tasks;
