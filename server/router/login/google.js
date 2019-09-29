const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');


router.get('/callback', passport.authenticate('google', {
        failureRedirect: '/',
        accessType: 'offline',
        prompt: 'consent'
    }),
    function (req, res) {
        console.log('loginGoogle callback');
        console.log(req.user);
        res.redirect(`http://localhost:8080/login?user=google|${req.user.authId}`);
    });

module.exports = router;
