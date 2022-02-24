const express = require('express');
const router = express.Router();
const Purchase = require("./../models/purchase.model");
const Album = require("./../models/album.model");


// CREATE ROUTES
// POST /purchases
router.post('/purchases', (req, res, next) => {
 const {shippingAddress, album} = req.body;
  
  const Purchases = Purchase.create({shippingAddress, album})
  .then((PurchasesCreated) => res.json({data: PurchasesCreated}))
  .catch((err) => console.log(err))

});

// GET /purchases/:purchaseId - you will use .populate() here
router.get("/purchases/:purchaseId", (req, res) => {
  
  const { purchaseId } = req.params
     
  Purchase.findById(purchaseId)
    .populate("album")
    .then((populatedPurchase) => res.json({ data: populatedPurchase }))
    .catch((error) => console.log(error));
});




module.exports = router;