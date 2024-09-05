const Message = require('../db/models/DBschema');

// Logic to get the messages for the logged-in user
const getMessage = async (req, res) => {
    try {
        const messages = await Message.find({ userName: req.user.userId }).populate('userName', 'userName');
        res.json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error retrieving messages" });
    }
};

// Logic to create a new message
const createMessage = async (req, res) => {
    const { title, message } = req.body;

    try {
        const newMessage = new Message({
            userName: req.user.userId, // associate the message with the logged-in user
            title,
            message
        });

        await newMessage.save();
        res.status(201).json({ message: "Message created successfully", newMessage });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating message" });
    }
};

// Logic to delete a message
const deleteMessage = async (req, res) => {
    const { id } = req.body;

    try {
        const deletedMessage = await Message.findByIdAndDelete({
            _id: id
        });

        if (!deletedMessage) {
            return res.status(404).json({ message: "Message not found or unauthorized" });
        }

        res.json({ message: "Message deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting message" });
    }
};

// Logic to update a message
const putMessage = async (req, res) => {
    const { id, title, message } = req.body;

    try {
        const updatedMessage = await Message.findOneAndUpdate(
            { _id: id, userName: req.user.userId }, // ensure the user can only update their own messages
            { title, message },
            { new: true }
        );

        if (!updatedMessage) {
            return res.status(404).json({ message: "Message not found or unauthorized" });
        }

        res.json({ message: "Message updated successfully", updatedMessage });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating message" });
    }
};

module.exports = {
    getMessage,
    createMessage,
    deleteMessage,
    putMessage
};
