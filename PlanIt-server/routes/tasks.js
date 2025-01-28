const express = require('express')
const router = express.Router()
const Task = require("../models/Task")
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchUser")


///////////////////////////// ROUTE 1 ////////////////////////////////////
//////////////////////////// Fetch all tasks of a user [ GET : /api/tasks/fetchalltasks ] Login required ///////////////////////////////////////////////////
 
router.get('/fetchalltasks', fetchuser , async (req, res)=>{
    try {
        // find tasks of a user by user id
        const tasks = await Task.find({user : req.user.id })
        // show found tasks in response
        res.send(tasks);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
} )



///////////////////////////// ROUTE 2 ////////////////////////////////////
//////////////////////////// Add a new task [ POST : /api/tasks/addtask ] Login required ///////////////////////////////////////////////////
 
router.post('/addtask', [body("title", "Title should be of atleast 3 characters").isLength({ min: 3 }), body("description", "description should be of atleast 5 characters").isLength({ min: 5 })] , fetchuser , async (req, res)=>{
    //if there is error, return bad request and error (this is a part from express-validator)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        // destructure the content provided in request as title, description, tag
        const { title, description, tag } = req.body
        // create a new task with these values, along with the value of user id 
        const task = new Task({
            title,
            description,
            tag,
            user: req.user.id
        })
        // save the created task 
        const savedTask = await task.save()
        res.json(savedTask)
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
} )



///////////////////////////// ROUTE 3 ////////////////////////////////////
//////////////////////////// Update an existing task [ PUT : /api/tasks/updatetask ] Login required ///////////////////////////////////////////////////
 
router.put('/updatetask/:id', fetchuser , async (req, res)=>{
    
    try {
        const { title, description, tag, completed } = req.body
        // create a newTask object
        const newTask = {};
        // check for each if title/ description/ tag was passed by user, then update that which was passed
        if(title) {newTask.title = title}
        if(description) {newTask.description = description}
        if(tag) {newTask.tag = tag}
        if(completed) {newTask.completed = completed}

        // find the task to be updated using "id"
        let task = await Task.findById(req.params.id)
        // if no task was found with that id
        if(!task) {
            return res.status(404).send("Task not found")
        }
        // if the user is not the owner of the task
        if(task.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")
        }
        // otherwise update the task
        task = await Task.findByIdAndUpdate(req.params.id, {$set: newTask}, {new: true})
        res.json({task})
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
} )



///////////////////////////// ROUTE 4 ////////////////////////////////////
//////////////////////////// Delete an existing task [ DELETE : /api/tasks/deletetask ] Login required ///////////////////////////////////////////////////
 
router.delete('/deletetask/:id' , fetchuser , async (req, res)=>{
    
    try {
        // find the task to be deleted
        let task = await Task.findById(req.params.id)
        // if no task was found with that id
        if(!task) {
            return res.status(404).send("Task not found")
        }
        // if the user is not the owner of the task
        if(task.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")
        }
        // otherwise delete the task
        task = await Task.findByIdAndDelete(req.params.id)
        res.json({"Success" : "Task has been deleted", task: task})
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
} )

module.exports = router
