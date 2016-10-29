var express = require('express');

var exp = express();
exp.set('view engine', 'jade');

exp.get('/', function(req, res) {
    res.render(
        'index', 
        {
            message: 'I should be rendered as text',
            message_html: '<p>I should be rendered as <b>HTML</b></p>'
        }
    );
});

var port = 3000;
exp.listen(port);
console.log('Listening on port ' + port);