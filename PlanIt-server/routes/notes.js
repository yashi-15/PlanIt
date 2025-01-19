const express = require('express')
const router = express.Router()
const Note = require("../models/Note")
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchUser")


///////////////////////////// ROUTE 1 ////////////////////////////////////
//////////////////////////// Fetch all notes of a user [ GET : /api/notes/fetchallnotes ] Login required ///////////////////////////////////////////////////
 
router.get('/fetchallnotes', fetchuser , async (req, res)=>{
    try {
        // find notes of a user by user id
        const notes = await Note.find({user : req.user.id })
        // show found notes in response
        res.send(notes);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
} )



///////////////////////////// ROUTE 2 ////////////////////////////////////
//////////////////////////// Add a new note [ POST : /api/notes/addnote ] Login required ///////////////////////////////////////////////////
 
router.post('/addnote', [body("title", "Title should be of atleast 3 characters").isLength({ min: 3 }), body("description", "description should be of atleast 5 characters").isLength({ min: 5 })] , fetchuser , async (req, res)=>{
    //if there is error, return bad request and error (this is a part from express-validator)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        // destructure the content provided in request as title, description, tag
        const { title, description, tag } = req.body
        // create a new note with these values, along with the value of user id 
        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id
        })
        // save the created note 
        const savedNote = await note.save()
        res.json(savedNote)
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
} )



///////////////////////////// ROUTE 3 ////////////////////////////////////
//////////////////////////// Update an existing note [ PUT : /api/notes/updatenote ] Login required ///////////////////////////////////////////////////
 
router.put('/updatenote/:id', fetchuser , async (req, res)=>{
    
    try {
        const { title, description, tag } = req.body
        // create a newNote object
        const newNote = {};
        // check for each if title/ description/ tag was passed by user, then update that which was passed
        if(title) {newNote.title = title}
        if(description) {newNote.description = description}
        if(tag) {newNote.tag = tag}

        // find the note to be updated using "id"
        let note = await Note.findById(req.params.id)
        // if no note was found with that id
        if(!note) {
            return res.status(404).send("Note not found")
        }
        // if the user is not the owner of the note
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")
        }
        // otherwise update the note
        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
        res.json({note})
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
} )



///////////////////////////// ROUTE 4 ////////////////////////////////////
//////////////////////////// Delete an existing note [ DELETE : /api/notes/deletenote ] Login required ///////////////////////////////////////////////////
 
router.delete('/deletenote/:id' , fetchuser , async (req, res)=>{
    
    try {
        // find the note to be deleted
        let note = await Note.findById(req.params.id)
        // if no note was found with that id
        if(!note) {
            return res.status(404).send("Note not found")
        }
        // if the user is not the owner of the note
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")
        }
        // otherwise delete the note
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({"Success" : "Note has been deleted", note: note})
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
} )

module.exports = router
