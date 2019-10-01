const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');


router.get('/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function(req, res) {
    console.log('loginFacebook callback');
    console.log(req.user);
    res.redirect(`http://localhost:8080/login?user=facebook|${req.user.authId}`);
});

module.exports = router;
