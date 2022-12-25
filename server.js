const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

const uri = process.env.DB_URL;
mongoose.set('strictQuery', false)
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //open created database connection
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("mongodb Connection success");
  });