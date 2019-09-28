const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;
const FacebookStrategy  = require('passport-facebook').Strategy;
const KakaoStrategy  = require('passport-kakao').Strategy;
const database = require('../api/database');

module.exports = () => {
    // Strategy 성공 시 호출
    passport.serializeUser(function (user, done) {
        done(null, user)
    });
    // 인증 후, 페이지 접근시 마다 사용자 정보를 Session에서 읽어옴.
    passport.deserializeUser(function (user, done) {
        const userInfo = database.getUserInfo({ authType : user.authType, authId : user.authId});
        done(null, userInfo);
    });

    // NaverStrategy 설정
    passport.use(new NaverStrategy({
            clientID: process.env.CLIENT_ID_NAVER,
            clientSecret: process.env.CLIENT_SECRET_NAVER,
            callbackURL: process.env.CALLBACK_URL_NAVER,
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
            clientID: process.env.CLIENT_ID_FACEBOOK,
            clientSecret: process.env.CLIENT_SECRET_FACEBOOK,
            callbackURL: process.env.CALLBACK_URL_FACEBOOK,
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

    // KakaoStrategy 설정
    passport.use(new KakaoStrategy({
            clientID: process.env.CLIENT_ID_KAKAO,
            clientSecret: process.env.CLIENT_SECRET_KAKAO,
            callbackURL: process.env.CALLBACK_URL_KAKAO,
            passReqToCallback: true
        }, (req, accessToken, refreshToken, profile, done) => {
            const _profile = profile._json;
            console.log(profile);
            const userInfo = database.getUserInfo({ authType : 'kakao', authId : _profile.id.toString()});

            if(userInfo) {
                done(null, userInfo);
            } else {
                // 정보가 없으면 저장
                database.storeUserInfo({
                    'authType': 'kakao',
                    'authId': _profile.id.toString(),
                    'authName': _profile.properties.nickname,
                    'authEmail': _profile.id.toString(),
                    'accessToken': accessToken
                }, done);
            }
        }
    ));
};
