// Init required dependencies ... 
require("dotenv").config();
const port = process.env.PORT || 3000;
const connectDB = require("../src/db/mongoDB");
const app = require('../app.js')

// Connection logic ... 
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});