import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    playlistName : {type:String,trim:true,required:true},
    problems:{type:[mongoose.Schema.Types.ObjectId],ref:"Problem",default:[]},
    tags : {type:[String],default:[]}
},
{
    timestamps:true
}
)

const Playlist =  mongoose.model("Playlist",playlistSchema)

export default Playlist