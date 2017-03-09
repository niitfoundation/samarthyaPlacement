// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const samarthyaPlatform = require('samarthyaPlatform');
// Get our API routes
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/emailverify',samarthyaPlatform.emailVerifyRoutes);
app.use('/api', samarthyaPlatform.authenticationRoutes);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
  Get port from environment and store in Express.
 */

const port = process.env.PORT || '3001';

app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/** 
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API runnin on localhost:${port}`));