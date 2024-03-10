const Form = require("../models/form");
const Comment = require("../models/Comment");


exports.createComments =async (req, res) => {

    try{
        let {id, comment} = req.body;
        
        const comments = await new Comment({
           id, comment
        });


        const savedComment = await comments.save();
        // console.log(savedComment);

        const updatedForm = await Form.findByIdAndUpdate(id, 
            {$push : { comments : savedComment._id} }
            , {new : true}).populate("comments").exec();


        res.json({
            form : updatedForm
        })
        
    }catch(err){
        res.status(500).json({
            success : false,
            message : "Error white creating comment"
        });
    }

}

