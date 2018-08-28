
// Set up our server
// var models = require('../index')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');  // Newly added

// Require/import the functions that were exported from the database file
const controllers = require('../database/index.js');
// const getAllGroceries = require()

// Use Express to fix CORS error (client via file, vs server via localhost)
// Solution 1: add OPTION to server file (used in my sprint, W3S1)
// Solution 2: use Express, to add static files (used below by Beth)
// app.use(express.static(__dirname + '/../client/dist'));
//app.use(express.static('/Users/huanl/Desktop/hrsf101-grocery-list/client/dist'));

// Per Express's API
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Expose a GET route /groceries
app.get('/groceries', (req, res) => {
    // res.send('hi from the get route');
    controllers.getAllGroceries((err, data) => {
        if (err) {
            res.status(503).send(err);
        } else {
            res.send(data);
        }
    })
});

// Expose a POST route /groceries
// Use body-parser (very useful middleware), for req.body (only needed for post request)
app.post('/groceries', bodyParser.json(), (req, res) => {
    controllers.addOneGrocery(req.body, (err) => {
        if (err) {
            res.status(500).send(err);
            console.log('error, item not added')
        } else {
            res.status(201).send();
            console.log('item is added');

        }
    })
});

// Toby's walkthrough on syntax
// app.use((req, res, next) => )


// Listen on PORT 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}.`)});