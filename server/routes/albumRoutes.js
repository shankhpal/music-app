import express from "express";
import { Readable } from 'stream';
import multer from 'multer';
import mongoose from "mongoose";
const db  = mongoose.connection.db;
import { protect } from "../middleware/authMiddleware.js";
import { createAlbum, getAlbums, getAlbumSongs, getSong, uploadSongs } from "../controllers/albumController.js";
const router = express.Router();
router.get('/song/:name',getSong);
router.route("/:id/").post(uploadSongs);
router.route('/').post(createAlbum);
router.route('/listAlbums').get(getAlbums)
router.route('/:id/songs').get(getAlbumSongs);
export default router;