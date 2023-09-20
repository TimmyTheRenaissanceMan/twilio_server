import express, { Express } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app: Express = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(cors());
app.use(
    cors({
        origin: "*", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // allow session cookie from browser to pass through
        //  allowedHeaders: "Content-Type, Authorization",
    })
);

app.use("/api", require("./routes/phoneRoutes"));

app.listen(5001 || process.env.PORT, () => {
    console.log("The server is running on port 5000");
});
