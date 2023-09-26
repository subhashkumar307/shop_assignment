require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const bodyParser = require('body-parser');
const port = 5000;

// middle ware
app.use(express.json());
app.use(cors());
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server start at port no :${port}`)
})
