  const express = require('express')
  const router = express.Router()

  const usercontroller = require('../controllers/siswaa')

 
  router.get('/siswaa', usercontroller.index)
  
  router.get('/siswaa/:id', usercontroller.show)
  
  router.post('/siswaa', usercontroller.store)
  
  router.put('/siswaa/:id', usercontroller.update)
  
  router.delete('/siswaa/:id', usercontroller.delete)

  module.exports = router