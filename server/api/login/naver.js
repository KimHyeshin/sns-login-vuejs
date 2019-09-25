const express = require('express');
const app = express();
const router = express.Router();
const request = require('request');
const config = require('dotenv').config();
const redirectURI = config.parsed.CALLBACK_URL_NAVER;

router.get('/', function (req, res) {
    console.log('/naverlogin');
    console.log(config.parsed);
    const state = 'RAMDOM_STATE';
    const apiUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${config.parsed.CLIENT_ID_NAVER}&redirect_uri=${redirectURI}&state=${state}`;
    var options = {
        url: apiUrl
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response)
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
            console.log('success!')
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

router.get('/callback', function (req, res) {
    console.log('/naverlogin/callback');
    const code = req.query.code;
    const state = req.query.state;
    const apiUrl = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${config.parsed.CLIENT_ID_NAVER}&client_secret=${config.parsed.CLIENT_SECRET_NAVER}&redirect_uri=${redirectURI}&code=${code}&state=${state}`
    var options = {
        url: apiUrl,
        headers: {'X-Naver-Client-Id': config.parsed.CLIENT_ID_NAVER, 'X-Naver-Client-Secret': config.parsed.CLIENT_SECRET_NAVER}
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

module.exports = router;
