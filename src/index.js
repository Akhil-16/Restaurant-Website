let express = require ("express")
let app = express();
let path = require ("path")
console.log(__dirname)
let hbs=require("hbs")

let connectdb = require("./connection/connectdb")
connectdb()
const Table=require("./models/model");
const PA=require("./models/model")

// let saveDoc = require("./models/model")
// saveDoc()




//view engine
app.set("view engine","hbs")
app.set("views",path.join(__dirname,"../templates/views"))

//for joining images and css 

app.use(express.static (path.join(__dirname, "../public")))
app.use(express.urlencoded({extended:false}))
hbs.registerPartials(path.join(__dirname,"../templates/partials"))




    app.get("/",(req,res)=>{
        res.render("home")
    })

    app.get("/table",(req,res)=>{
       res.render("table")
    })
    app.post("/table",async(req,res)=>{
       try {
        const ur=new Table(req.body)
       await  ur.save()
       res.status(201).render("table")
       } catch (error) {
        res.status(500).send(error)
       }
     })

app.get("/aboutus", (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/Aboutus.html")
    )
    })
  
    app.get("/login",(req,res)=>{
       
     res.render("login")
    })
    app.post("/login",async (req,res)=>{
        try {
        //     const use=new PA(req.body)
        //    await  use.save()
        //    res.status(201).render("home")
        const user=req.body.user
        const pass=req.body.pass
     
        const mail=await PA.findOne({user:user})
        if(mail.pass===pass){
            res.render("home",{
                user:`${mail.user}`
            })

        }
     
        else{
            res.send("password not match")
        }
           } catch (error) {
            res.send("account not created")
           }
      
        
       })
    app.get("/order",(req,res)=>{
       
        res.render("order")
       })
       app.get("/contact",(req,res)=>{
        res.sendFile(path.join(__dirname,"../public/contact.html"))
       })
 


app.listen("9000", ()=>{console.log('connected...')


})