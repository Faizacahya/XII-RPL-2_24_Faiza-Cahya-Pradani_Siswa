const User = require('../models/Siswaa')
  module.exports = {
    // get all user
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
    // get a user 
    show: async (req, res) => {
      try {
        const user = await User.findById(req.params.id)
        res.json({
          status: true,
          data: user,
          method: req.method,
          url: req.url,
          message: "Data Berhasil Didapat"
         }) 
        
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
        
      }
    },
    store: async (req, res) => {
      try {
        const user = await User.create(req.body)
        res.status(200).json({
          status: true,
          data: user,
          method: req.method,
          url: req.url,
          message: "Data Berhasil Ditambahkan"
         }) 
        
      } catch (error) {
        res.status(400).json({success: false})
        
      }
    },
      update: async (req, res) => {
        try {
          const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
    
          })
          res.json({
            status: true,
            data: user,
            method: req.method,
            url: req.url,
            message: "Data Berhasil Didapat"
           }) 
          
        } catch (error) {
          console.error(error);
          res.status(400).json({ success: false, error: error.message });
          
        }
      }, 
        
      delete: async (req, res) => {
        try {
          await User.findByIdAndDelete(req.params.id)
          res.json({
            status: true,
            method: req.method,
            url: req.url,
            message: "Data Berhasil dihapus"
           }) 
        } catch (error) {
          res.status(400).json({success: false})
          
        }
    
        
      }
  }
  