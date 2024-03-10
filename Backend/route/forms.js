
const express = require("express");

const router = express.Router();
const Form = require("../models/form");
const Comment = require("../models/Comment");


const {createForm} = require("../controllers/createForm");
const {createComments} = require("../controllers/createComments");
const {getCommentById} = require("../controllers/getCommentById")
const {getForm} = require("../controllers/getForm");

router.get("/getForms", getForm);

router.post("/comments/create", createComments);

router.post("/create", createForm);
router.get("/getComments/:id", async (req, res) => {
    let { id } = req.params;

    const comment = await Comment.findById({_id : id});
    console.log(comment);
    res.send(comment);
})

router.get('/getFormById/:id', async (req, res) => {
    let { id } = req.params;
    
    const form = await Form.findById({_id : id});
    console.log(form);
    res.send(form);
})


module.exports = router;

