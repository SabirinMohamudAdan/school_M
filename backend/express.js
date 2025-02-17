const express =require("express");
const mongoose = require("mongoose");
const schoolSchema = require("./model/schoolSchema");

const app=express()


app.use(express.json())
// connect database
mongoose.connect("mongodb://localhost:27017/school-pro").then(()=>{
    console.log("database has been connected")
}).catch((error)=> console.log(error))


// cteate data

app.post("/student/create", async(req,res)=>{
    const newdata=schoolSchema(req.body)
    const savedata=await newdata.save()
    if(savedata){
        res.send("insert data")
    }
})


// get data
app.get("/student/read",async(req,res)=>{
    const getdata=await schoolSchema.find()
    if(getdata){
        res.send(getdata)
    }
})


// update data

app.put("/student/update/:id",async(req,res)=>{
    const updatedata=await schoolSchema.updateOne({_id:req.params.id},
        {$set:req.body}
    )
    if(updatedata){
        res.send("sucess data")
    }
})


// delete data

app.delete("/student/delete/:id",async(req,res)=>{
    const deletedata=await schoolSchema.deleteOne({_id:req.params.id})
    if(deletedata){
        res.send(" success delete data")
    }

})

app.listen(1000,console.log("server is running "));