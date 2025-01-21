const connectToMongo = require("./db")
const express = require('express')
var cors = require('cors')

//mongo db se connect kiya, connection ka function db.js me likha h
connectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//Available routes are these
//these routes are defined in some other files in routes folder
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

//app ko run kiya
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

