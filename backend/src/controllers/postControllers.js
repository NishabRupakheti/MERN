const Post = require('../db/models/DBschema')

const getMessage = async (req,res)=>{
    try {
        const messages =  await Post.find();
        res.status(200).json(messages);
      } catch (err) {
        res.status(500).json({
          message : err
        })
      }
}

const createMessage = async (req,res)=>{
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
}

const deleteMessage = async (req,res)=>{
    const {id} = req.params
    try{
      await Post.findByIdAndDelete(id)
      res.status(201).json({"message": "Done"})
    }
    catch(err){
      console.error(err)
    }
}

// functionality 
const putMessage = async(req,res)=>{
  try{
    const {id , message } = req.body
    const messageObj = {message : message }
    await Post.findByIdAndUpdate(id,messageObj)
    res.status(201).json({message : "Done"})
  }
  catch(err){
    res.json({err})
  }

}

module.exports = {
    getMessage,
    createMessage,
    deleteMessage,
    putMessage
}

