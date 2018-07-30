const express = require('express');
const port = 5555;
const app = express();

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");    
});

app.get('/', function (req, res) {
    var userAgent = req.headers['user-agent'];
    
    if (/Android/i.test(userAgent)) {
        return res.redirect(301, 'sms:74121?body=help');
    }

    if (/iPad|iPhone|iPod/.test(userAgent)) {
        return res.redirect(301, 'sms:74121&body=help');
    }

    else {
        return res.redirect(301, 'http://ifisnull.com');
    }
});