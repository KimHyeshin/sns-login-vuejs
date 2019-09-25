const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    console.log('check server ::::');
    console.log('checked!');
    res.json({status:300, msg:"서버가 연결되어있습니다."});
});

module.exports = router;
