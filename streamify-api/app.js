const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/streamifyDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connection estabilized!");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
    console.log("server started on port 5000");
});