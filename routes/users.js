const express = require("express")
const router = express.Router()


router.use(logger)

router.get('/',(req,res)=>{     
    res.send("hey user")
})



router.get('/new',(req,res)=>{
    res.render('textField')
})

router.post('/new',(req,res)=>{         // this is that  post request . user will post data into this route . 
    console.log(req.body.field)             // made to get the body , requesting a name="field" from the body 
    res.redirect('/')                       // after the submission redirecting to "localhost:3000"
})

router.get('/page',(req,res)=>{
    res.send(req.originalUrl)               // to get the current loaded url which is "localhost:3000/users/page"  and this will be printed in the html body
})

function logger(req,res,next){              // the mighty middleware
    console.log(req.originalUrl);
    next()                                      // very important if theis is not called page will be looped infinately
}

module.exports=router                       // exporting the router so that express can get it in the server.js 