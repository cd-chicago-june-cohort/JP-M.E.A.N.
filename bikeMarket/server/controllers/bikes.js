var mongoose = require('mongoose');
var Bike = mongoose.model('Bike');
var User = mongoose.model('User');

module.exports = {

    reg: function(req, res) {
        User.find({email: req.body.email}, function(error, user) {
            if (user.length >= 1) {
                res.json(user);
            } else {
                var user = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password
                });
                user.save(function(err) {
                    if (err) {
                        console.log('FAILURE');
                        res.json(err);
                    } else {
                        console.log('SUCCESS!');
                        req.session.id = user[0]._id;
                        res.json(user);
                    }
                })
            }
        })
    },


    login: function(req, res) {
        User.find({email: req.body.email}, function(error, user) {
            if (error) {
                console.log('ERROR');
            } else {
                if (user.length > 0) {
                    req.session.id = user[0]._id;
                }
                console.log('SUCCESSFULLY LOGGEDIN USER: ');
                res.json(user);
            }
        })
    }

    // add: function(req, res) {
    //     console.log(req.body);
    //     var player = new Player({
    //         name: req.body.name,
    //         position: req.body.position,
    //         game1Status: req.body.game1Status,
    //         game2Status: req.body.game2Status,
    //         game3Status: req.body.game3Status,
    //     });
    //     player.save(function(error) {
    //         if (error) {
    //             console.log('ERROR');
    //         } else {
    //             console.log('PLAYER SUCCESFULLY SAVED TO DATABASE!!!!');
    //             res.json({});
    //         }
    //     })
    // },

    // show: function(req, res) {
    //     Player.find({}, function(err, players) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.json(players);                
    //         }
    //     })
    // },


    // destroy: function(req, res) {
    //     Player.findByIdAndRemove(req.body._id, function(err) {
    //         if (err) {
    //             console.log('ERROR DELETING FROM DB');
    //         } else {
    //             console.log('SUCCESSFULLY DELETED PLAYER');
    //             res.json({});
    //         }
    //     })
    // },


    // game1change: function(req, res) {
    //     Player.update({_id: req.body.playerId}, {
    //         'game1Status': req.body.newStatus
    //     }, function (error, player) {
    //         if (error) {
    //             console.log('ERROR UPDATING PLAYER');
    //         } else {
    //             console.log('SUCCESFULLY CHANGED PLAYER STATUS');
    //         }
    //     })
    // },



}