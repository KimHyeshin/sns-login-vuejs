const express = require('express');
const app = express();
const session = require('express-session'); // 세션 설정
const passport = require('passport'); // 여기와
const passportConfig = require('./config/passport'); // 여기
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
app.listen(3030, () => {
    // server connect
    console.log('Example app listening on port 3030!');
});

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


