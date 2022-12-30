const express = require("express");
const { db } = require("./db");

const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: "Blog Application API creation"})
})

// Server connection using express framework
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});

//Database connection function call
db()

