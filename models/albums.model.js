const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema ({
  performer: String,
  title: String,
  cost: Number
})

const Album = mongoose.model('Album', albumSchema)

module.exports = Album;