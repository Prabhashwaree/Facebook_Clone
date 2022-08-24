const express = require("express");
const app = express();
const router = express.Router();

const User = require('../modle/user.modle');
app.use(express.json);


router.post('/', async (req, res) => {
    const userName = req.body.first_Name;
    const password = req.body.password;
    const user = await User.find();

    for(const i of user){
        if(userName == i.first_Name && password === i.password){
                res.json(i);

        }else{
            // res.send("Incorrect password..");
        }
    }
})


module.exports = router;
