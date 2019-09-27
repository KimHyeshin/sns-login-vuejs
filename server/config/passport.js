const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;
const FacebookStrategy  = require('passport-facebook').Strategy;
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

    // NaverStrategy 설정
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

    // FacebookStrategy 설정
    passport.use(new FacebookStrategy({
            clientID: config.parsed.CLIENT_ID_FACEBOOK,
            clientSecret: config.parsed.CLIENT_SECRET_FACEBOOK,
            callbackURL: config.parsed.CALLBACK_URL_FACEBOOK,
            profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone',
                'updated_time', 'verified', 'displayName']
        }, function (accessToken, refreshToken, profile, done) {
            var _profile = profile._json;
            const userInfo = database.getUserInfo({authType: 'facebook', authId: _profile.id});

            if (userInfo) {
                done(null, userInfo);
            } else {
                // 정보가 없으면 저장
                database.storeUserInfo({
                    'authType': 'facebook',
                    'authId': _profile.id,
                    'authName': _profile.name,
                    'authEmail': _profile.id,
                    'accessToken': accessToken
                }, done);
            }
        }
    ));
};
