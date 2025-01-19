const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchUser")

const JWT_SECRET = "yashiiiiiieeeeee";



//////////////////////////////////////////////  ROUTE 1  ///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// Create a new User [ POST : /api/auth/createuser ] No login required ///////////////////////////////////////////////////

router.post("/createuser", [body("name", "Name should be of atleast 3 characters").isLength({ min: 3 }), body("email", "Please enter a valid email").isEmail(), body("password", "Password should be of atleast 5 characters").isLength({ min: 5 })], async (req, res) => {
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
                id: user.id,
            },
        };
        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({ authToken }); //response returned ater creating user
    }
    catch (error) {
        //error shown if any error is occoured
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
});



////////////////////////////////////////////////////  ROUTE 2  //////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// Authenticate a User [ POST : /api/auth/login ] No login required ///////////////////////////////////////////////////////

router.post("/login", [body("email", "Please enter a valid email").isEmail(), body("password", "Password cannot be blank").exists()], async (req, res) => {
    //if there is error, return bad request and error (this is a part from express-validator)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // get the email and password given by the user by descructuring it from request.body
    const { email, password } = req.body;
    try {
        // find a user from database with the same email entered by user
        let user = await User.findOne({ email });
        // if email entered by user did not match with any email in database then show this error
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials!" });
        }
        // otherwise (if an email was found) then compare the password entered by user with the password of that user stored in the database
        const passwordCompare = await bcrypt.compare(password, user.password); //hashing the password and then comparing happens internally in the compare function
        // if it returns false means the password did not match then show this error
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials!" });
        }
        // if the password matched then create a token for the user
        const data = {
            user: {
                id: user.id,
            },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken }); //response returned ater creating user
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
});



////////////////////////////////////////////////////  ROUTE 3  //////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// Get User Details [ POST : /api/auth/login ] Login required /////////////////////////////////////////////////////////////

// this route is same as route 2 but it returns user details instead of token
router.post("/getuser", fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error..");
    }
    
})

module.exports = router;
