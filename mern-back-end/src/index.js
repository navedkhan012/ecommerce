const env = require("dotenv").config();
const bodyParser = require("body-parser");
var cors = require("cors");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const path = require("path");
//mongoose here
mongoose
  .connect("mongodb://localhost/flipkart", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true, //make this true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "uploads")));

app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server is connected on port ${process.env.PORT}`);
});
