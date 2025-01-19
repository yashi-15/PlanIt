const jwt = require("jsonwebtoken");

const JWT_SECRET = "yashiiiiiieeeeee";

const fetchUser = (req, res, next) => {
    //Get the user from the JWT token and add id to request object
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send({ error: "Please authenticate." });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next();   
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate." });
    }
}

module.exports = fetchUser;