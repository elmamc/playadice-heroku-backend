const express = require('express')
const router = express.Router()
const login = require('./login/login')

// define the home page route
router.get('/', (req, res) => {
    res.send('Birds home page')
  })
  
router.use('/login', login)


module.exports = router