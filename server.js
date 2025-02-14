require("dotenv").config(); 

const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors"); 

const app = express();
const PORT = process.env.PORT || 6001;


app.use(express.json()); 
app.use(cors()); 

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


const songRoutes = require("./routes/songRoutes");
app.use("/api/songs", songRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
