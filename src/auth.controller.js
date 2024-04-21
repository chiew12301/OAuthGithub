const oauthService = require("./auth.service");


// Controller code which orchestrates the overall process
// It calls the service functions where the business logic is present
function oauthProcessor(code, done) {
    try {
        const token = oauthService.getGithubAccessToken(code);
        return token;
    } catch (error) {
        throw new Error('Failed to exchange code for access token');
    }
 
}

module.exports = {
  oauthProcessor
};