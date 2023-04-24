require("dotenv").config();

const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat")
const messageRoutes = require("./routes/message")

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors())

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// routes
app.get("/", (req, res) => {
  res.json({ mess: "Hello server" });
});
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);


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
