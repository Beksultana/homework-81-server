const express = require('express');
const Mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const port = 6500;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});