/// <reference path="../typings/express/express.d.ts" />

import express = require('express');
var app = express();

import foo = require('./Foo/Foo');


app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Example app listening at http://%s:%s :D!!!', host, port);
    
    var f = new foo.FooBar();
    f.doFoo();
});