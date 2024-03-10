

const Comment = require("../models/Comment");

exports.getCommentById = async (req, res) => {
    try{
        let { id } = req.params;

        const comment = await Comment.findById({_id : id});

        res.send(comment);
    }catch(err){
        res.status(500).json({
            success : false,
            message : "comments Failed to fetch"
        });
    }
}


