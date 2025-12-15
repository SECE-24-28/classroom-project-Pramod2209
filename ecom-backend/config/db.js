const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectdb = async () => {
    try {
        await mongoose.connect(process.env.db_url);
        console.log("Database Connected");   
    } catch (error) {
        console.error("mongodb connection err", error);
        process.exit(1);   
    }
};
module.exports = connectdb;