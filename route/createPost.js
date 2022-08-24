const express = require("express");
const app = express();
const router = express.Router();



const post = require('../modle/createPost.modle');
app.use(express.json);


router.get('/', async (req, res) => {
    try{
        const createPost = await post.find()
        res.json(createPost)
    }catch(error){
        res.send("haven't Create post..")
    }
    
})


router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const createPost = await post.findById(req.params.id)
        res.json(createPost)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.post('/', async (req, res) => {
    const createPost = new post({
        user_Id: req.body.user_Id,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body
       
    })

    try {
        const response = await createPost.save()
        // res.send(response)
        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
    // res.send("send post..");
})

router.delete('/:id', async (req, res) => {
    try {
        console.log('hhh',req.params.id);
        const createPost = await post.findById(req.params.id)
        console.log(createPost);
        const response = await createPost.remove()
        res.json(response);

        
    } catch (err) {
        res.send('Err: ' + err)
    }
})



router.put('/:id', async (req, res) => {
    try {
        const createPost = await post.findById(req.params.id)
        createPost.user_Id = req.body.user_Id,
        createPost.date = req.body.date,
        createPost.time = req.body.time,
        createPost.title = req.body.title,
        createPost.body = req.body.body

        const response = await createPost.save()
        res.json(response)

    } catch (err) {
        res.send('Err: ' + err)
    }


})

module.exports = router;