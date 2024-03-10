
const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
    {
        title : {
            type : String
        },
        desc : {
            type  : String
        },
        comments : [{
            type :  mongoose.Schema.Types.ObjectId,
            ref : "Comment"
        }],
        createdAt : {
            type : Date,
            default : Date.now(),
        }
    }
)

module.exports = mongoose.model("Form", formSchema);
