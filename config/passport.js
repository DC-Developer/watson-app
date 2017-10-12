//const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//require the model users file
//const User = require("/models/user");

//require the auth file
//configAuth = require('./auth');

/*
module.exports = function(passport){

    passport.serializeUser(function(user,done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        process.nextTick(function(){
            //the first parameter in findOne searches the databse for the username
            User.findOne({'local.username': email}, function(err,user){
                if(err)
                    return done(err);
                if(user){
                    return done(null, false, req.flash('signupMessage', 'That email already exists'));
                } else{
                    var newUser = new User();
                    newUser.local.username = email;
                    newUser.local.password = newUser.generateHash(password);

                    newUser.save(function(err){
                        if(err)
                            throw err;
                        return done(null, newUser);
                    })
                }
                    

            });
        });
    }
    }))
}


passport.use(new googleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret, 
    callbackURL: configAuth.googleAuth.callbackURL
},
function(accessToken, refreshToken, profile, done){
    process.nextTick(function(){
        User.findOne({'google.id': profile.id}, function(err, user){
            if(err)
                return done(err);
            if(user)
                return done(null, user);
            else{
                var newUser = new User();
                newUser.google.id = profile.id;
                newUser.google.token = accessToken;
                newUser.google.name = profile.displayName;
                newUser.google.email = profile.email[0].value;

                newUser.save(function(err){
                    if(err)
                        throw err;
                    return done(null, newUser);
                })
                console.log(profile);
            }    

        })
    })
}
));

*/