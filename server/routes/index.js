const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req,res)=>{
    console.log('http://localhost:3001/api/');
    res.send({title:'hello react!'});
    // client 와의 소통
});
router.get('/get_image', (req,res) => {
    console.log('get image api');
    try{
        fs.readFile(path.join(__dirname, '../public/images/poster_1.jpg'), (err,data) => {
            if(err) {
                console.log(err);
                res.send({url: false});
            }
            console.log("image get HTTP");
            res.send({url : data.toString('base64')});
        })
    }catch(err){
        res.send({url: false});
    }
})

module.exports = router;

