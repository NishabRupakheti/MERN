// Init required dependencies ... 
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("./mongoDB");
const cors = require("cors");
const Post = require("./DBschema");


// Connection logic ... 
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});


// Necessary middlewares 
app.use(cors());
app.use(express.json());


// Defining routes ... 
app.get("/message", async (req, res) => {
  try {
    const messages =  await Post.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({
      message : err
    })
  }
});

// This route handles the post request ... 
app.post('/message', async (req,res)=>{
    const {name , message} = req.body

    try {
        const savingmessage = new Post({
            name, message
        })

        await savingmessage.save()
        res.status(201).send(savingmessage)
    }   
    catch(err){
       res.status(500).json({
        message : err
       })
    }
    

})

app.delete('/message/:id' , async (req,res)=>{
    const {id} = req.params
    try{
      await Post.findByIdAndDelete(id)
      res.status(201).json({"message": "Done"})
    }
    catch(err){
      console.error(err)
    }
})