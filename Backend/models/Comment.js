

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        id : {
            type :  mongoose.Schema.Types.ObjectId,
            ref : "Form"
        },
        comment : {
            type : String
        },
        createdAt : {
            type : Date,
            default : Date.now(),
        }
    }
)

module.exports =mongoose.model("Comment", commentSchema);
