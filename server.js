const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/testDatabase', (req, res) => {
    console.log(res.body);
    const kitty = new Cat({ name: req.body.cat });
    console.log(kitty);
    kitty.save().then(() => 
        res.send({
            message: 'success',
            paylod: req.body
        })
    );
});

app.get('/pingTest', (req, res) => {
    res.send({
        hasBeenHit: true
    })
})

app.listen(5000, () => console.log('App running on port 5000 🔥'));
