const mongoose = require("mongoose");

const batSchema = new mongoose.Schema(
    {
        ranking:{
            type:Number,
            unique: true,
            required:true
        },
        player:{
            type:String,
            required:true,
            trim:true
        },
        team:{
            type:String,
            required:true,
            trim:true
        },
        rating:{
            type:Number,
            required:true,
            trim:true
        },
        event:{
            type:String,
            default:"ODI Batting Rankings",
        },

    }
)


const Bat = new mongoose.model("Bat",batSchema);

module.exports = Bat;
