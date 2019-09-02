require('./config/config');

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.send('get usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (!body.nombre) {
        res.status(400).json({
            status: false,
            mensaje: "El nombre es obligatorio"
        })
    } else {
        res.json({
            body: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.send('delete usuario');
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT);
});