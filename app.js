var express = require('express'),  
    app = express(),
    bodyParser = require('body-parser'),
    client = require('./client'),
    path = require('path');

app.use(bodyParser.json());

app.post('/registerClick', function(req, res) {
    // console.log(req);
      
    client.index({  
      index: 'clicks',
    //   id: '1',
      type: 'click',
      body: req.body
    },function(err,resp,status) {
        res.send(resp);
    });
});

app.get('/', function(req, res) {  
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.js'));
});

app.listen(process.env.PORT || 8080);  