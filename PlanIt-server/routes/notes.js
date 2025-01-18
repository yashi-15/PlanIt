const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.json({title: "note"})
} )

module.exports = router
