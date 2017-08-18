var bikes = require('../controllers/bikes.js');
var path = require('path');


module.exports = function(app) {

    app.post('/api/reg', function(req, res) {
        bikes.reg(req, res);
    })

    app.post('/api/login', function(req, res) {
        bikes.login(req, res);
    }) 

    app.all('*', function(req, res) {
        res.sendFile(path.resolve('./public/dist/index.html'))
    })


};