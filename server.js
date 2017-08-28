const express = require('express')
const path = require('path');
var bodyParser = require('body-parser')
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); 


app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.post('/signup', (req, res) => {
    fs.appendFile('signup.txt', `\n${req.body.email}`, (err, file) => {
        if(err) return res.json({error});
        return res.json({ message: 'file saved'});
        console.log('------------------saved --------------');

    })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})