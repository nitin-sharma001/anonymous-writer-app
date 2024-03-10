
const Form = require("../models/form");

exports.createForm = async (req, res) => {
    try{
        const {title, desc} = req.body;

        console.log(title);
        

        const respose = await Form.create({
            title, desc
        });

        console.log(respose);

        res.status(200).json({
            success : true,
            data : respose,
            message : "Entry Created Successfully"
        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            data : respose,
            message : "Failed to Create Entry"
        });
    }
}
