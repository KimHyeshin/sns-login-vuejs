const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('naver', null), function(req, res) { // @todo Additional handler is necessary. Remove?
    console.log('/auth/naver failed, stopped');
});
router.get('/callback', passport.authenticate('naver', { failureRedirect: '/' }), function(req, res) {
    console.log('callback');
    console.log(req.user);
    res.redirect(`http://localhost:8080/login?isAuth=true&auth_type=${req.user.auth_type}&auth_id=${req.user.auth_id}`);
});

module.exports = router;
