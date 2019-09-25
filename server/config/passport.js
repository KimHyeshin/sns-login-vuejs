const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;
const config = require('dotenv').config();
const database = require('../api/database');

module.exports = () => {
    /* Strategy 성공 시 호출 */
    passport.serializeUser(function (user, done) {
        done(null, user)
    });
    /*인증 후, 페이지 접근시 마다 사용자 정보를 Session에서 읽어옴.*/
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use(new NaverStrategy({
            clientID: config.parsed.CLIENT_ID_NAVER,
            clientSecret: config.parsed.CLIENT_SECRET_NAVER,
            callbackURL: config.parsed.CALLBACK_URL_NAVER,
            passReqToCallback: true
        }, (req, accessToken, refreshToken, profile, done) => {
            var _profile = profile._json;
            database.storeUserInfo({
                'auth_type': 'naver',
                'auth_id': _profile.id,
                'auth_name': _profile.nickname,
                'auth_email': _profile.email,
                'accessToken': accessToken
            }, done);

            // process.nextTick(function () {
            //     const user = {
            //         name: profile.displayName,
            //         email: profile.emails[0].value,
            //         username: profile.displayName,
            //         provider: 'naver',
            //         naver: profile._json
            //     };
            //     return done(null, user);
            // });
        }
    ));
}
