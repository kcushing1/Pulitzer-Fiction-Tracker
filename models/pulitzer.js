const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pulitzerSchema = new Schema({
  year: { type: Number, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: Array, required: true },
  located: Array,
});

const Pulitzer = mongoose.model("Pulitzer", pulitzerSchema);

module.exports = Pulitzer;
