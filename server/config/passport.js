const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;
const config = require('dotenv').config();
const database = require('../api/database');

module.exports = () => {
    // Strategy 성공 시 호출
    passport.serializeUser(function (user, done) {
        done(null, user)
    });
    // 인증 후, 페이지 접근시 마다 사용자 정보를 Session에서 읽어옴.
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use(new NaverStrategy({
            clientID: config.parsed.CLIENT_ID_NAVER,
            clientSecret: config.parsed.CLIENT_SECRET_NAVER,
            callbackURL: config.parsed.CALLBACK_URL_NAVER,
            passReqToCallback: true
        }, (req, accessToken, refreshToken, profile, done) => {
            const _profile = profile._json;
            const userInfo = database.getUserInfo({ authType : 'naver', authId : _profile.id});

            if(userInfo) {
                done(null, userInfo);
            } else {
                // 정보가 없으면 저장
                database.storeUserInfo({
                    'authType': 'naver',
                    'authId': _profile.id,
                    'authName': _profile.nickname,
                    'authEmail': _profile.email,
                    'accessToken': accessToken
                }, done);
            }
        }
    ));
};
