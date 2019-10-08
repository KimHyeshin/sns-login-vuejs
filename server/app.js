const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./config/passport');

/**
 * ssl
 */
const https = require('https');
const http = require('http');
const fs = require('fs');

const options = {
    key: fs.readFileSync('config/secret/server.key'),
    cert: fs.readFileSync('config/secret/server.cert')
};

/**
 * cors
 * cross-origin 처리
 */
const cors = require('cors');
app.use(cors());

/**
 * .env 환경변수 처리
 */
require('dotenv-flow').config();

/**
 * passport
 */
app.use(session({ secret: 'secret', resave: true, saveUninitialized: false })); // 세션 활성화
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결
passportConfig();

/**
 * server
 */
// Create an HTTP service.
http.createServer(app).listen(3030);

// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443);

/**
 * parser
 */
app.use(express.json());
app.use(express.urlencoded( {extended : true } ));

/**
 * routing controllor
 */
const commonRoute = require('./router/common');
const naverLoginRoute = require('./router/login/naver');
const facebookLoginRoute = require('./router/login/facebook');
const kakaoLoginRoute = require('./router/login/kakao');
app.use('/', commonRoute);
app.use('/loginNaver', naverLoginRoute);
app.use('/loginFacebook', facebookLoginRoute);
app.use('/loginKakao', kakaoLoginRoute);


