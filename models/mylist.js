const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mylistSchema = new Schema({
  book: {
    type: Scheme.Types.ObjectId,
    ref: "Pulitzer",
  },
  rating: Array,
  notes: String,
});

const MyList = mongoose.model("MyList", mylistSchema);

module.exports = MyList;
