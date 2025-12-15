const express = require("express");
const ProductRoute = require("./routes/ProductRoute")
const dotenv = require("dotenv");
const connectdb = require("./config/db");
dotenv.config();
connectdb(); // Connect to MongoDB
const app = express();
app.use(express.json());
app.use("/product",ProductRoute)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});