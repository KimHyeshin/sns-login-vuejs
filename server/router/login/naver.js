const express = require('express');
const app = express();
const router = express.Router();
const naverLogin = require('../../api/naver/login');

router.get('/callback', function (req, res) {
    console.log('/naverlogin/callback');
    const code = req.query.code;
    const state = req.query.state;
    naverLogin.getToken(res, code, state);
});

module.exports = router;

