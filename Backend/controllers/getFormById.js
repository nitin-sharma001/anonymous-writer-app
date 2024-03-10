

const Form = require("../models/form");

exports.getFromById = async (req, res) => {
    try{
        let { id } = req.params;

        const form = await Form.findById({_id : id});

        res.send(form);
    }catch(err){
        res.status(500).json({
            success : false,
            message : "Form Failed to fetch"
        });
    }
}


