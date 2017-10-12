console.log('this is loading');

var keys = require('../googlekeys.js');

var googlekeys = {
    'googleAuth':
    {
        'clientID'    : clientID,
        'clientSecret': clientSecret,
        'callbackURL' : 'https://topic-watson.herokuapp.com/auth/google/callback'
    }
};

module.exports = googlekeys;