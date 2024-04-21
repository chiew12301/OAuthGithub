const axios = require('axios');
const config = require("../config");

// function to get the access token
function getGithubAccessToken(code, done) {
      try {
        const { data } = axios.post('https://github.com/login/oauth/access_token', {
            client_id: config.CLIENT_ID,
            client_secret: config.CLIENT_SECRET,
            code: code,
            redirect_uri: config.REDIRECT_URI
        }, {
            headers: {
                Accept: 'application/json'
            }
        });
        return data.access_token;
    } catch (error) {
        throw new Error('Failed to get access token from GitHub');
    }
}


// Function to get the user profile for the token provided
function getAccessTokenOfUser(token, done) {
  // Github APIs are authenticated and we have to share the token in headers
  // The token is same as what we recieved in the previous step
      try {
        const { data } = axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `token ${token}`
            }
        });
        return data;
    } catch (error) {
        throw new Error('Failed to get user profile from GitHub');
    }
}

module.exports = {
  getGithubAccessToken,
  getAccessTokenOfUser
}



