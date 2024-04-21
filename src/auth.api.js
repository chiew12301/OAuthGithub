const express = require('express');
const config = require("../config");
const router = express.Router();
const oauthCtrl = require("./auth.controller");

// redirects the login to consent authorization screen from github
router.get('/login', (req, res) => {
        res.redirect(`https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}`);
});


// Callback url to which github oauth code is sent 
router.get('/callback', (req, res) => {
     const code = req.query.code;
    try {
        const token = oauthCtrl.oauthProcessor(code);
        res.cookie('access_token', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.error('Error exchanging code for access token:', error.message);
        res.status(401).send('Unauthorized');
    }
});

module.exports = router;