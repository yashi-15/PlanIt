const express = require('express')
const router = express.Router()
const Note = require("../models/Note")
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchUser")


///////////////////////////// ROUTE 1 ////////////////////////////////////
//////////////////////////// Fetch all notes of a user [ GET : /api/notes/fetchallnotes ] Login required ///////////////////////////////////////////////////
 
router.get('/fetchallnotes', fetchuser , async (req, res)=>{
    try {
        const notes = await Note.find({user : req.user.id })
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
        const { title, description, tag } = req.body
        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
} )

module.exports = router
