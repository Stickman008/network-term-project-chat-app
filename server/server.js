require("dotenv").config();

const express = require("express");
// const cors = require("cors")
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json());
// app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ mess: "Hello server" });
});
app.use("/api/user", userRoutes);
app.use("/api/chat", userRoutes);

// connect to database
const PORT = process.env.PORT || 5000;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log("connected to db & listening on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
