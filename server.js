var express = require("express");
var bodyParser = require("body-parser");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var router = require("./controllers/watsonController.js");

app.use("/", router);

//going to require mongoose 

//require ('./congfig/passport')(passport);

/*
app.use(session({ secret: 'anystringoftext',
                    saveUninitialized: true,
                    resave: true}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());//use connect-flash for flash messages
*/

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

// Handlebars.registerHelper('splitTopic', (title)=>{
//     var t = title.split("/")
//     return t[1] + " <br/> " + t[0];
//   });
