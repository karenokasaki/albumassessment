const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Album = require("./album.model")


const purchaseSchema = new Schema ({
  shippingAddress: String,
  album: {  type: Schema.Types.ObjectId,  ref: "Album"  }
    
})

module.exports = mongoose.model("Purchase", purchaseSchema);

