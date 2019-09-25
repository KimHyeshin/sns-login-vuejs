const request = require('request');
const config = require('dotenv').config();
const redirectURI = config.parsed.CALLBACK_URL_NAVER;

const naverLoginAPI  = {
    getToken: function (res, code, state){
        const apiUrl = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${config.parsed.CLIENT_ID_NAVER}&client_secret=${config.parsed.CLIENT_SECRET_NAVER}&redirect_uri=${redirectURI}&code=${code}&state=${state}`
        var options = {
            url: apiUrl,
            headers: {'X-Naver-Client-Id': config.parsed.CLIENT_ID_NAVER, 'X-Naver-Client-Secret': config.parsed.CLIENT_SECRET_NAVER}
        };
        request.get(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(JSON.parse(body));
                // res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
                // res.end(body);
                naverLoginAPI.getProfile(res, JSON.parse(body).access_token);
            } else {
                res.status(response.statusCode).end();
                console.log('error = ' + response.statusCode);
            }
        });
    },
    getProfile: function (res, token){
        const apiUrl = 'https://openapi.naver.com/v1/nid/me';
        var options = {
            url: apiUrl,
            headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'text/json;charset=utf-8'}
        };
        request.get(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
                console.log(JSON.parse(body));
                res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
                res.end(body);
            } else {
                console.log('error');
                if(response != null) {
                    res.status(response.statusCode).end();
                    console.log('error = ' + response.statusCode);
                }
            }
        });
    }
};

module.exports = naverLoginAPI;