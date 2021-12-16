const express = require("express")

const router = express.Router()

router.get('/',(req,res)=>{         // localhost:3000/admin
    res.send("admin here")
})

router.get('/super',(req,res)=>{        // localhost:3000/admin/super
    res.send("super admin")
})

module.exports = router