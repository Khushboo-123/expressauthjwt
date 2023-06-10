const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectdb = require("./config/connectdb");
const app = express();


connectdb()

const port = process.env.PORT;

//cors policy
app.use(cors());
app.use(express.json());

//Database
connectdb();

//middleware


//cors policy
app.use(cors());



app.listen(port, () => {
    console.log("Server is running at 3000 port");
})