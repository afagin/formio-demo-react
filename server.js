const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// const forceSSL = function () {
//     return function (req, res, next) {
//         if (req.headers['x-forwarded-proto'] !== 'https') {
//             return res.redirect(
//                 ['https://', req.get('Host'), req.url].join('')
//             );
//         }
//         next();
//     }
// }

// app.use(forceSSL());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/build'));

app.post("/api/submit", (req, res) => {
  console.log('api submit')
  res.json(req.body);
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(process.env.PORT || 8080);
