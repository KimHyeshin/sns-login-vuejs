const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');


router.get('/callback', passport.authenticate('kakao', { failureRedirect: '/' }), function(req, res) {
    console.log('loginKakao callback');
    console.log(req.user);
    res.redirect(`http://localhost:8080/login?user=kakao|${req.user.authId}`);
});

module.exports = router;
