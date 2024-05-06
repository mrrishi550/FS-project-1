import mongoose, { Schema } from "mongoose";

const drinksSchema = new Schema({
  Name: String,
  Manufacture: String,
  Quantity: String,
  Taste: String,
  flavour: String,
  YearsAged: String,
  Country: String,
  AlcoholPercentage: Number,
  rating: Number,
});

const Wine = mongoose.model("wine", drinksSchema);

export default Wine;
