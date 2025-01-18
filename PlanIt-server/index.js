const connectToMongo = require("./db")
const express = require('express')

//mongo db se connect kiya, connection ka function db.js me likha h
connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//app ko run kiya
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

