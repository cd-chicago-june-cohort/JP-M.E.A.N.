var players = require('../controllers/players.js');
var path = require('path');

module.exports = function(app) {


    app.post('/api/add', function(req, res) {
        players.add(req, res);
    })


    app.get('/api/show', function(req, res) {
        players.show(req, res);
    })


    app.post('/api/destroy', function(req, res) {
        players.destroy(req, res);
    })


    app.post('/api/game1change', function(req, res) {
        players.game1change(req, res);
    })


    app.post('/api/game2change', function(req, res) {
        players.game2change(req, res);
    })


    app.post('/api/game3change', function(req, res) {
        players.game3change(req, res);
    })


    app.all('*', function(req, res) {
        res.sendFile(path.resolve('./public/dist/index.html'))
    })


};