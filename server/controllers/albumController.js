
import asyncHandler from "express-async-handler";
import { Readable } from 'stream';
import multer from 'multer';
import mongoose from "mongoose"
import Album from "../models/albumModel.js";
import AlbumSongs from "../models/albumSongsModel.js";

const getSong = asyncHandler(async(req,res)=>{
    
        
        res.set('content-type', 'audio/mp3');
        res.set('accept-ranges', 'bytes');
      
        let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'tracks' });
      
      
        let downloadStream = bucket.openDownloadStreamByName(req.params.name);
      
        downloadStream.on('data', (chunk) => {
          res.write(chunk);
        });
      
        downloadStream.on('error', () => {
          res.sendStatus(404);
        });
      
        downloadStream.on('end', () => {
          res.end();
        });
      
})


const uploadSongs = asyncHandler(async (req, res)=>{
    const storage = multer.memoryStorage()
    const upload = multer({ storage: storage});
    const album = await Album.findById(req.params.id);
   
    upload.single('track')(req, res, async(err) => {
      if (err) {
        return res.status(400).json({ message: "Upload Request Validation Failed",err });
      } else if(!req.body.name) {
        return res.status(400).json({ message: "No track name in request body" });
      }
     
      let trackName = req.body.name;
      
      albumSongs(req.body.name,album._id);
  
      // Covert buffer to Readable Stream
      const readableTrackStream = new Readable();
      readableTrackStream.push(req.file.buffer);
      readableTrackStream.push(null);
  
      let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'tracks' });
  
      let uploadStream = bucket.openUploadStream(trackName);
      let id = uploadStream.id;
      readableTrackStream.pipe(uploadStream);

      uploadStream.on('error', () => {
        return res.status(500).json({ message: "Error uploading file" });
      });
  
      uploadStream.on('finish', () => {
        return res.status(201).json({ message: "File uploaded successfully, stored under Mongo ObjectID: " + id });
      });
    });

    
     

})

const albumSongs= asyncHandler(async(name,id)=>{
    
    await AlbumSongs.create({
        name,
        albumId:id
    });
})

const createAlbum = asyncHandler(async(req ,res)=>{
    const {name , createdBy} = req.body;
    const albumExists = await Album.findOne({ name });

  if (albumExists) {
    res.status(404);
    throw new Error("album name already exists");
  }

  const album = await Album.create({
    name,
    createdBy
  });

  if (album) {
    res.status(201).json({
      _id: album._id,
      name: album.name,
      createdBy:album.createdBy,
    });
  } else {
    res.status(400);
    throw new Error("ablum not found");
  }
})
const getAlbumSongs = asyncHandler(async(req, res)=>{
    const album = await Album.findById(req.params.id);
   if(album)
   {
       const songs = await AlbumSongs.find({albumId:album._id})
       
       res.status(201).json({
           songs
       })
   }else {
    res.status(400);
    throw new Error("ablum not found");
  }
   
})
const getAlbums = asyncHandler(async(req, res)=>{
    const album = await Album.find();
   if(album)
   {     
       res.status(201).json({
           album
       })
   }else {
    res.status(400);
    throw new Error("ablum not found");
  }
   
})


export{uploadSongs, createAlbum, getAlbumSongs,getSong, getAlbums};