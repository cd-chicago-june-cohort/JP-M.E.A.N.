
var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {

    add: function(req, res) {
        console.log(req.body);
        var player = new Player({
            name: req.body.name,
            position: req.body.position,
            game1Status: req.body.game1Status,
            game2Status: req.body.game2Status,
            game3Status: req.body.game3Status,
        });
        player.save(function(error) {
            if (error) {
                console.log('ERROR');
            } else {
                console.log('PLAYER SUCCESFULLY SAVED TO DATABASE!!!!');
                res.json({});
            }
        })
    },

    show: function(req, res) {
        Player.find({}, function(err, players) {
            if (err) {
                console.log(err);
            } else {
                res.json(players);                
            }
        })
    },


    destroy: function(req, res) {
        Player.findByIdAndRemove(req.body._id, function(err) {
            if (err) {
                console.log('ERROR DELETING FROM DB');
            } else {
                console.log('SUCCESSFULLY DELETED PLAYER');
                res.json({});
            }
        })
    },


    game1change: function(req, res) {
        Player.update({_id: req.body.playerId}, {
            'game1Status': req.body.newStatus
        }, function (error, player) {
            if (error) {
                console.log('ERROR UPDATING PLAYER');
            } else {
                console.log('SUCCESFULLY CHANGED PLAYER STATUS');
            }
        })
    },


    game2change: function(req, res) {
        Player.update({_id: req.body.playerId}, {
            'game2Status': req.body.newStatus
        }, function (error, player) {
            if (error) {
                console.log('ERROR UPDATING PLAYER');
            } else {
                console.log('SUCCESFULLY CHANGED PLAYER STATUS');
            }
        })
    },

    game3change: function(req, res) {
        Player.update({_id: req.body.playerId}, {
            'game3Status': req.body.newStatus
        }, function (error, player) {
            if (error) {
                console.log('ERROR UPDATING PLAYER');
            } else {
                console.log('SUCCESFULLY CHANGED PLAYER STATUS');
            }
        })
    }


}
