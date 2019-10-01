const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');


router.get('/callback', passport.authenticate('naver', { failureRedirect: '/' }), function(req, res) {
    console.log('loginNaver callback');
    console.log(req.user);
    res.redirect(`http://localhost:8080/login?user=naver|${req.user.authId}`);
});

module.exports = router;
