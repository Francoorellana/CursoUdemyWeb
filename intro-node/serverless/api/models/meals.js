const mongoose = require("mongoose")
const Schema = mongoose.Schema

const meals = mongoose.model("Meal",  new Schema({ 
    name: String,
    desc: String,
 }))
module.exports = meals 

