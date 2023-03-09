const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const path = require("path");
app.use(express.json());
const userRoute = require("./routes/userRoute");

app.use("/api/users", userRoute);
const port = 8900;
app.listen(port, () => console.log(`node js server started at port ${port}!`));
    
