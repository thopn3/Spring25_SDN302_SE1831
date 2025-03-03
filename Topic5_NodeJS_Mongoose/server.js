const { json, urlencoded } = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectionDB = require('./config/db');
const bodyParser = require('body-parser');
// ....

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Back-End RESTFul API app"
    });
});

app.use('/api/products', require('./routes/productRoute'));

// Connect to DB
connectionDB();
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});