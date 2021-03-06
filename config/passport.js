// config/passport.js

// load all the things we need
// var LocalStrategy = require('passport-local').Strategy;

// var GoogleStrategy = require('passport-google-oauth2').Strategy;

// var configAuth = require('../googlekeys.js');

// // load up the user model
// // var User = require('../app/models/user');



// // load the auth variables
// // var configAuth = require('./auth');

// module.exports = function (passport) {

//     // used to serialize the user for the session
//     passport.serializeUser(function (user, done) {
//         done(null, user.id);
//     });

//     // used to deserialize the user
//     passport.deserializeUser(function (id, done) {
//         User.findById(id, function (err, user) {
//             done(err, user);
//         });
//     });

//     passport.use('local-signup', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true
//     },
//     function(req, email, password, done){
//         process.nextTick(function(){
//             //the first parameter in findOne searches the databse for the username
//             User.findOne({'local.username': email}, function(err,user){
//                 if(err)
//                     return done(err);
//                 if(user){
//                     return done(null, false, req.flash('signupMessage', 'That email already exists'));
//                 } else{
//                     var newUser = new User();
//                     newUser.local.username = email;
//                     newUser.local.password = newUser.generateHash(password);

//                     newUser.save(function(err){
//                         if(err)
//                             throw err;
//                         return done(null, newUser);
//                     })
//                 }
                    

//             });
//         });
//     }));

//     // code for login (use('local-login', new LocalStategy))
//     // code for signup (use('local-signup', new LocalStategy))
//     // code for facebook (use('facebook', new FacebookStrategy))
//     // code for twitter (use('twitter', new TwitterStrategy))

//     // =========================================================================
//     // GOOGLE ==================================================================
//     // =========================================================================
//     passport.use(new GoogleStrategy({

//         clientID: configAuth.googleAuth.clientID,
//         clientSecret: configAuth.googleAuth.clientSecret,
//         callbackURL: configAuth.googleAuth.callbackURL,

//     },
//         function (token, refreshToken, profile, done) {
//             console.log(token, refreshToken, profile, done);
//             // make the code asynchronous
//             // User.findOne won't fire until we have all our data back from Google
//             process.nextTick(function () {

//                 // try to find the user based on their google id
//                 User.findOne({ 'google.id': profile.id }, function (err, user) {
//                     if (err)
//                         return done(err);

//                     if (user) {

//                         // if a user is found, log them in
//                         return done(null, user);
//                     } else {
//                         // if the user isnt in our database, create a new user
//                         var newUser = new User();

//                         // set all of the relevant information
//                         newUser.google.id = profile.id;
//                         newUser.google.token = token;
//                         newUser.google.name = profile.displayName;
//                         newUser.google.email = profile.emails[0].value; // pull the first email

//                         // save the user
//                         newUser.save(function (err) {
//                             if (err)
//                                 throw err;
//                             return done(null, newUser);
//                         });
//                     }
//                 });
//             });

//         }));
// };
