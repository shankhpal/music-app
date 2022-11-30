import  mongoose  from "mongoose";
const albumSongsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
   albumId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Album"
    },
});

const AlbumSongs = mongoose.model('albumSongs', albumSongsSchema);
export default AlbumSongs