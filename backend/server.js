const express=require("express")
const cors=require("cors")
const connectDB=require("./config/db");
const Contact=require("./Contact");
const app=express();
connectDB();
app.use(cors());
app.use(express.json());

//create Contact 
app.post("/api/contacts",async(req,res)=>{
    const contact=await Contact.create(req.body);
    res.send(contact);
})

//Get all contacts
app.get("/api/contacts",async(req,res)=>{
    const contacts=await Contact.find();
    res.send(contacts);
});

//Update Contact 
app.put("/api/contacts/:id",async(req,res)=>{
    const contact=await Contact.findByIdAndDelete(req.params.id,req.body,{
        new: true,
    });
    res.send(contact)
   
})

//Delete Contact 
app.delete("/api/contacts/:id",async (req,res)=>{
    await Contact.findByIdAndDelete(req.params.id);
    res.send({message:"Deleted"})
})
app.listen(5000,()=>console.log("Server running on port 5000"))