
const mongoose=require("mongoose");
const employeeSchema=new mongoose.Schema({
    people:{
        type:Number,
        required:true
    },
    time:{
        type:Number,
        required:true
        

    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    select:{
        type:String,
        required:true
    }
   




    
  

   


})

const paSChema=new mongoose.Schema({
    user:{
        type:String,
        
       
    },
    pass:{
        type:String,
        
       

    }

})

//create a collection
 const Table=new mongoose.model("Table",employeeSchema);
module.exports = Table

const PA=new mongoose.model("PA",paSChema);
module.exports=PA
// savind doc
// saveDoc=async()=>{
//     let s1=new Table({
//         people:10,
//         firstname:"akhil",
//         lastname:"sai",
//         phonenumber:"7",
//         type:"Bar"
        
//     })
//   await s1.save()
// }
// module.exports=saveDoc