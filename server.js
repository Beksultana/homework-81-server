const express = require('express');
const mongoose = require('mongoose');
const links = require('./app/Links');
const cors = require('cors');
const app = express();

const port = 6500;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost/links', {useNewUrlParser: true}).then(() => {
    app.use('/links', links);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
});