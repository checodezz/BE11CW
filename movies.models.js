const mongoose= require("mongoose");

const movieSchema = new mongoose.Schema({
  title: "String",
  required : true,
}, {
releaseYear : {
  type: Number, 
  required : true
}, {
  
}
})