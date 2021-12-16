//this is the main file everything start from here



const express = require("express");           // importing express 
const req = require("express/lib/request");         //i dont know why  this thing is here 
const hbs = require("express-handlebars");              // getting handlebars  first need to install handle bars by " npm install express-handlebars"
const { send } = require("express/lib/response");       



const app = express()                                 // making an app instance for express

app.use(express.urlencoded({extended:true}))            // "urlencoded"  is used for getting the body of the html page , needed for the post requestes. there is a post request in users.js reffer it

app.set('view engine',"hbs")                            // setting up a simple view engine , make a folder called view in the root directory

app.get('/',(req,res)=>{                            // the "localhost:3000"  default root
    console.log("hello there")
    // res.download("server.js")
    // res.status(500).send("not available")

    res.render('index',{text:"there"})                          // rendering or showing  the views > index.hbs page , 
})


// app.get('/user',(req,res)=>{             

//     res.send("user page")                                  // used to display a simple text in the page
// })

// app.get('/user/new',(req,res)=>{
//     res.send("new user")                             
// })


const userRouter = require("./routes/users")                       // importing modules from the routes folder 
const adminRouter = require("./routes/admin")


app.use('/user',userRouter)                                 // making giving routes for the given modules ,  localhost:3000/user
app.use('/admin',adminRouter)

app.listen(3000)                                        // straing the server in the port 3000