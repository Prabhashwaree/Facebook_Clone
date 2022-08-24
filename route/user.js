const express = require("express");
const app = express();
const router = express.Router();



const User = require('../modle/user.modle');
app.use(express.json);


router.get('/', async (req, res) => {
    // res.send("Get Alll User..")
    try{
        const user = await User.find()
        res.json(user)
    }catch(error){
        // res.send("haven't User..")
    }
    
})


router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        // res.send('Err: ' + err)
    }
})

router.post('/', async (req, res) => {
    const user = new User({
        user_Id: req.body.user_Id,
        first_Name: req.body.first_Name,
        surname: req.body.surname,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        password: req.body.password,
        phone_Number: req.body.phone_Number,
        email: req.body.email
       
    })

    try {
        const response = await user.save()
        // res.send(response)
        res.json(response)
    } catch (err) {
        // res.send('Err: ' + err)
    }
    // res.send("send post..");
})

router.delete('/:id', async (req, res) => {
    try {
        console.log('hhh',req.params.id);
        const user = await User.findById(req.params.id)
        console.log(user);
        const response = await user.remove()
        res.json(response);

        
    } catch (err) {
        res.send('Err: ' + err)
    }
})



router.put('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.user_Id = req.body.user_Id,
        user.first_Name = req.body.first_Name,
        user.surname = req.body.surname,
        user.gender = req.body.gender,
        user.dateOfBirth = req.body.dateOfBirth,
        user.password = req.body.password,
        user.phone_Number = req.body.phone_Number,
        user.email = req.body.email

        const response = await user.save()
        res.json(response)

    } catch (err) {
        res.send('Err: ' + err)
    }


})

module.exports = router;