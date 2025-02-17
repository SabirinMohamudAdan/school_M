const mongoose =require("mongoose")
const schoolschema=mongoose.Schema({

    FName:{
        type:String,
        required:true
    },
    MName:{
        type:String,
        required:true
    },
    LName:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    ClassName:{
        type:String,
        required:true
    },
    Add:{
        type:String,
        required:true
    }
  
})
module.exports=mongoose.model("student",schoolschema)