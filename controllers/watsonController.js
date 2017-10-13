var express = require("express");

var router = express.Router();

var passport = require('passport');

// Import the model to use its database functions.
var watson = require("../models/watsonModel.js");


// TEST ROUTE FOR WATSON
router.get("/watsontest", function (req, res) {
  var watsonFuncs = require("../public/assets/js/watson.js");
  watsonFuncs.test1(12, 'How do bees fly', function (data) {
    console.log("Returned data.length", data.length);
    res.send(data);
  });
});

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  watson.all(function(data) {
    var hbsObject = {
      watson: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// TODO make this endpoint work!
router.post("/api/watson", function(req, res) {
  watson.create([
    "name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect("/?id=" + result.insertId);
  });
});

// TODO make this endpoint work!
router.post("/api/watson/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  watson.update({
    name: req.body.name
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.redirect('/#404')
    } else {
      res.redirect('/');
    }
  });
});

router.post("/api/watson/delete/:id", function(req, res) {
  
  watson.delete(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.redirect('/#404')
    } else {
      res.redirect('/');
    }
  });
});

// route for home page
router.get('/auth', function (req, res) {
  res.render('auth'); // load the file
});


// route for login form
// route for processing the login form
// route for signup form
// route for processing the signup form

// route for showing the profile page
router.get('/profile', isLoggedIn, function (req, res) {
  res.render('profile', {  //took out the .ejs
    user: req.user // get the user out of session and pass to template
  });
});

// route for logging out
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// facebook routes
// twitter routes

// =====================================
// GOOGLE ROUTES =======================
// =====================================
// send to google to do the authentication
// profile gets us their basic information including their name
// email gets their emails
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// the callback after google has authenticated the user
router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/'
  }));

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
      return next();//  //res.redirect('/search')

  // if they aren't redirect them to the home page
  res.redirect('/');
}

// Export routes for server.js to use.
module.exports = router;
