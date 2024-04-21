const express = require('express');
const path = require('path');
const dateFormat = require('date-format');
const app = express();
const morgan = require('morgan');
const config = require("./config");
const oauthrouter = require("./src");

// Useful for logging the requests reaching to this server
morgan.token('time', () => dateFormat.asString(dateFormat.ISO8601_FORMAT, new Date())); // Both morgan and log4js are configured to same date format, so that log reading is meaningful and not confusing due to different date formats
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

// Mount point for the apis starting with /oauth
app.use('/oauth', oauthrouter)

const server = app.listen(config.PORT, () => {
  console.log(`App listening on port ${config.PORT}`);
});

// catch 404 and forward to error handler
 app.use((req, res) => {
  console.error(`Requested resource ${req.method} ${req.url} not found..!`);
  res.status(404).send("Resource not found..!");
});

module.exports = server;