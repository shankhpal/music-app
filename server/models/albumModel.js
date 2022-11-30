import  mongoose  from "mongoose";
const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    createdBy:{
        type: String,
        required: true,
    },
});

const Album = mongoose.model('Album', albumSchema);
export default Album