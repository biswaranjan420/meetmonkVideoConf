var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var meetnhireController = require('./controller/meetnhire.controller');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.listen(3000, () => {
    console.log('meetmonkVideoConf listening on port 3000!')
});
//For User
app.get('/api/joinRoom', meetnhireController.joinRoom);