import React, { useState } from "react";
import TaskContext from "./taskContext";

const TaskState = (props) => {
    const host = "http://localhost:5000";
    const [tasks, setTasks] = useState([]);

    //Get all tasks
    const getTasks = async () => {
        //API call
        const response = await fetch(`${host}/api/tasks/fetchalltasks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
        });
        const json = await response.json();
        setTasks(json);
    };

    // Add a task
    const addTask = async (title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/tasks/addtask`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log(json);

        //logic to edit on client side
        setTasks(tasks.concat(json));
    };

    // Delete a task
    const deleteTask = async (id) => {
        //API call
        const response = await fetch(`${host}/api/tasks/deletetask/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
        });
        const json = await response.json();
        console.log(json);

        //logic to edit on client side
        const newTasks = tasks.filter((task) => task._id !== id);
        setTasks(newTasks);
    };

    // Edit a task
    const editTask = async (id, title, description, tag, completed) => {
        //API call
        const response = await fetch(`${host}/api/tasks/updatetask/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({ title, description, tag, completed }),
        });
        const json = await response.json();
        console.log(json);

        //logic to edit on client side
        const newTasks = JSON.parse(JSON.stringify(tasks))
        for (let i = 0; i < newTasks.length; i++) {
            const task = newTasks[i];
            if (task._id == id) {
                newTasks[i].title = title;
                newTasks[i].description = description;
                newTasks[i].tag = tag;
                newTasks[i].completed = Boolean(completed);
                break;
            }
        }
        setTasks(newTasks);
    };

    return <TaskContext.Provider value={{ tasks, getTasks, addTask, deleteTask, editTask }}>{props.children}</TaskContext.Provider>;
};

export default TaskState;
