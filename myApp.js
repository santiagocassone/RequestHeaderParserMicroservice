var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.use('/api/whoami', bodyParser.urlencoded({ extended: false }));
app.route('/api/whoami').get(function(req,res){

    res.json({"ipaddress": req.headers['x-forwarded-for'].slice(0, req.headers['x-forwarded-for'].indexOf(',')), "language": req.headers['accept-language'], "software": req.headers['user-agent'] });

});




// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
