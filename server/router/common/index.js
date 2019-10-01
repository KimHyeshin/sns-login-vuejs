const express = require('express');
const router = express.Router();
const database = require('../../api/database');

router.get('/', function(req, res, next){
    console.log('check server ::::');
    console.log('checked!');
    res.json({status:300, msg:"서버가 연결되어있습니다."});
});

router.get('/login', function(req, res, next){
    console.log('/login');
    console.log(req.query.user);
    const authType = req.query.user.split('|')[0];
    const authId = req.query.user.split('|')[1];
    const data = database.getUserInfo({authType, authId});
    console.log('result');
    console.log(data);
    if(data){
        res.json({status:200, msg:"사용자 정보가 조회되었습니다.", data});
    }else{
        res.status(500).json({status:500, msg:"사용자 정보를 조회하지 못했습니다."});
    }
});

// router.get('/logout', function(req, res, next){
//     console.log('/logout');
//     console.log(req.query.user);
//     const authType = req.query.user.split('|')[0];
//     const authId = req.query.user.split('|')[1];
//     const result = database.setUserLogout({authType, authId});
//     if(result){
//         res.json({status:200, msg:"logout 처리가 완료되었습니다."});
//     }else{
//         res.json({status:500, msg:"logout 처리 중 에러가 발생하였습니다."});
//     }
//
// });

module.exports = router;
