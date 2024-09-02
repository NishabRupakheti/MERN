const Post = require('../db/models/DBschema')


// logic to get the message ... 
const getMessage = async (req,res)=>{

  // not all have access to the messages that db returns ... only the logged in user can access it ...
  // client sends the user id of an individual user and this logic checks the id ....  
  // not workinng .. 


}


// this is a logic to create messages ... POST request ... 
const createMessage = async (req,res)=>{
    // client sends the name message and the userId of one who wish to initiate a post request .. 
    const {name , message , userId } = req.body

    // creates a new instance of the post model an saves it .. 
    try {
        const savingmessage = new Post({
            name, message , userId
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

