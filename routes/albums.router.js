const express = require('express');
const router = express.Router();
const Album = require("./../models/album.model");


// CREATE ROUTES
// POST /albums
router.post('/albums', (req, res, next) => {
 const {performer, title, cost} = req.body;
  
  const AlbumCreated = Album.create({performer, title, cost})
  .then((AlbumCreated) => res.json({data: AlbumCreated}))
  .catch((err) => console.log(err))

});

// GET /albums
router.get('/albums', (req, res, next) => {
  Album.find()
    .then((Album) => res.json({data: Album}))
    .catch((err) => console.log(err))
})

// GET /albums/:albumId
router.get('/albums/:id', (req, res, next) => {
  const { id } = req.params
  
  Album.findById(id)
    .then(AlbumId => res.json( {data:AlbumId} ))
    .catch((err) => console.log(err))
})


// POST /albums/:albumId
router.post('/albums/:id', async (req, res, next) => {
  const {id} = req.params
  const {performer, title, cost} = req.body

  const albumUpdate = Album.findOneAndUpdate( {_id:id}, {...req.body}, {new: true} )
    .then((albumUpdate) => res.json( {data: albumUpdate} ))
    .catch((err) => console.log(err))
})

// POST /albums/:albumId/delete

router.post('/albums/:id/delete', async (req, res, next) => {
  const {id} = req.params
  
  const deletedAlbum = Album.deleteOne({ _id: id })
    .then((deletedAlbum) => res.status(204).json( {data: deletedAlbum} )) 
    .catch((err) => console.log(err))
})



module.exports = router;