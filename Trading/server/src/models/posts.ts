import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    // intOrderID:{
    //     type:Number,
    //     required:true
    // },
    orderID:{
        type:String,
        required:true
    },
    symbol:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    description:{
        type:Number,
        required:true
    },
    postCategory:{
        type:Number,
        required:true
    },
    side:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
});
const Posts=mongoose.model('Posts',postSchema);
export default Posts;