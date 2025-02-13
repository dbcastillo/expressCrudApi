require("dotenv").config(); // loads env var from .env into app's process.env obj 

const express = require("express"); // framework for Node
const mongoose = require("mongoose"); // library that simplifies working wiith MongoDB in Node.js
const cors = require("cors"); // cross origin resource sharing -> restrict how resources can be requests from another

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(express.json()); // Parse JSON request bodies (client req comes as raw data -> must be parsed into JSON)
app.use(cors()); // Enable CORS

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
const itemRoutes = require("./routes/songRoutes");
app.use("/api/items", itemRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
