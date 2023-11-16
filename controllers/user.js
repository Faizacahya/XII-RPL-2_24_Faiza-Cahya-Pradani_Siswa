const User = require('../models/User')
  module.exports = {
    index: async (req, res) => {
      try {
        const users = await User.find() 
        if(users.length > 0){
          res.status(200).json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
        })
            
        }else{
            res.json({
                status: false,
                message: "Data Masih Kosong"

            })
        }
        
      } catch (error) {
        res.status(400).json({succes: false})
        
      }
      
    },
    store: (req, res) => {
        users.push(req.body)
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data Berhasil Ditambahkan"
         }) 
      },
      update: (req, res) => {
        const id = req.params.id
        users.filter(user => {
          if(user.id == id){
            user.nama = req.body.nama
            user.email = req.body.email
            return user
          }
        })
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data Berhasil Diubah"
         }) 
      },
      delete: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data Berhasil dihapus"
         }) 
      }
  }
  