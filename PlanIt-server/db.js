const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/PlanIt"

const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
}

module.exports = connectToMongo;