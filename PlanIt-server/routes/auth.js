const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "yashiiiiiieeeeee"

//create a new user [ POST : /api/auth/createuser ]
//No login required
router.post("/createuser", [body("name", "Name should be of atleast 3 characters").isLength({ min: 3 }), body("email", "Please enter a valid email").isEmail(), body("password", "Name should be of atleast 5 characters").isLength({ min: 5 })], async (req, res) => {
    //if there is error, return bad request and error (this is a part from express-validator)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // check if a user with this email already exists..
        let user = await User.findOne({ email: req.body.email });
        // if a user is returned from above then show an error
        if (user) {
            // Function is returned here if the user already exists
            return res.status(400).json({ error: "User with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);


        // Otherwise a new user is created
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        const data = {
            user: {
                id : user.id
        }
    }
        const authToken = jwt.sign(data, JWT_SECRET)
        console.log(authToken);
        

        res.json({authToken});  //response returned ater creating user
    } 
    //error shown if any error is occoured
    catch (error) {
        console.log(error);
        res.status(500).send("Some Error Occured");
    }
});

module.exports = router;
