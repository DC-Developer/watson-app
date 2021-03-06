var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');

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

// require('./config/passport')(passport);

// Import routes and give the server access to them.
var router = require("./controllers/watsonController.js");

//Watson API Related
// const log4js = require('log4js');
const discovery = require('./public/assets/js/service-manager').get('watson-discovery');
// const logger = log4js.getLogger(appName);
const serviceManager = require('./public/assets/js/service-manager');
require('./public/assets/js/index')(app);

app.use("/", router);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

// Handlebars.registerHelper('splitTopic', (title)=>{
//     var t = title.split("/")
//     return t[1] + " <br/> " + t[0];
//   });
