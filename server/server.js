const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: "include",
  })
);

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: `Hello From Back-End!` });
});

app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
