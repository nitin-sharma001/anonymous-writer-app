const Form = require("../models/form");



exports.getForm =async (req, res) => {

    try{
        let allFroms = await Form.find({});
        // console.log(allFroms);
        res.send(allFroms);
        // res.status(200).json({
        //     success : true,
        //     forms : allForm
        // });

    }catch(err){
        res.status(500).json({
            success : false,
            message : "Entries Find Failed"
        });
    }

}

