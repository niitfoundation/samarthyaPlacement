const express = require('express');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
const samarth=require('samarthyaPlatform');
// declare axios for making http requests
const axios = require('axios');
app.set('jwtTokenSecret', 'somethinghere');
const layout = require('./layout');
const json = require("../../src/app/jsonData/jsonData.json");

const user = [{ username: "pankush@samarthya.com", password: "pankush@12", role: "Admin" },
    { username: "dheerendra@samarthya.com", password: "dheerendra@12", role: "Coordinator" },
    { username: "murga@samarthya.com", password: "murga@12", role: "Supervisor" }
];

router.get('/languages', function(req, res) {
    return res.json({
        success: true,
        data: json["languages"]
    });

});


router.post('/authenticate', function(req, res, next) { 
    let params = req.body;
    let userDetails = user.filter(function(obj) {
        return obj.username == params.username && obj.password == params.password;
    });
    let userExist = user.filter(function(obj) {
        return obj.username == params.username;
    });

    if (userExist.length == 0) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (userDetails.length == 0) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    } else {
        // if user is found and password is right
        // create a token
        const token = jwt.sign(userDetails[0], app.get('jwtTokenSecret'), {
            expiresIn: 60 * 30 // expires in 30 minutes
        });

        // return the information including token as JSON
        res.json({
            success: true,
            message: 'Welcome! ' + userDetails[0].username,
            auth_token: token,
            role: userDetails[0].role
        });
    }
});

router.use(function(req, res, next) {
    console.log('middleware called');
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.headers['authorization'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('jwtTokenSecret'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'UnAuthorised User' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});
router.use('/layout', layout);

//Get Token 
// Get all posts
// router.get('/posts', (req, res) => {
//     // Get posts from the mock api
//     // This should ideally be replaced with a service that connects to MongoDB
//     axios.get(`${API}/posts`)
//         .then(posts => {
//             res.status(200).json(posts.data);
//         })
//         .catch(error => {
//             res.status(500).send(error)
//         });
// });

module.exports = router;