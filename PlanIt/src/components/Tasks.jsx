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
            <div className="flex justify-center">
                <div className="">
                    <p>{tasks.length === 0 && "No tasks to display"}</p>
                    <div className="grid grid-cols-4 gap-3 justify-items-center px-5 mx-auto">
                        {tasks.map((task) => {
                            return <TaskItem key={task._id} task={task} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;
