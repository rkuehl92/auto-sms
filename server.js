const express = require('express');
const iosDict = require('./common/ios');
const androidDict = require('./common/android');

const port = 5555;
const app = express();

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");    
});

app.get('/', function (req, res) {
    const userAgent = req.headers['user-agent'];
    
    let i = new iosDict();
    let a = new androidDict();

    if (a.containsUserAgent(userAgent)) {
        return res.redirect(301, 'sms:74121?body=help');
    }
    
    if (i.containsUserAgent(userAgent)) {
        return res.redirect(301, 'sms:74121&body=help');
        
    }

    else {
        return res.redirect(301, 'http://example.com');
    }
});