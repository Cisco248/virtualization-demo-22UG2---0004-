
const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Server Started on Port: ${PORT}`)
})

app.listen(PORT, ()=> {
    console.log(`Server Running on Port: ${PORT}`)
})