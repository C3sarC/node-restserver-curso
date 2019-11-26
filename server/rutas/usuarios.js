const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const { validaToken, validaRole } = require('../middleware/autenticacion');

//Modelo BD
const Usuario = require('../models/usuarios');


const app = express();

app.get('/usuario', validaToken, (req, res) => {

    Usuario.find({ estado: true }, 'nombre email role estado')
        .limit(2)
        .exec((err, usuarioDB) => {
            if (err) {
                return res.status(400).json({
                    status: false,
                    err
                });
            }

            res.json({
                status: true,
                usuario: usuarioDB
            });
        });

});

app.post('/usuario', [validaToken, validaRole], function(req, res) {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }

        res.json({
            status: true,
            usuario: usuarioDB
        });
    });

});

app.put('/usuario/:id', [validaToken, validaRole], function(req, res) {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);

    Usuario.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }

        res.json({
            status: true,
            usuario: usuarioDB
        });
    });
});

app.delete('/usuario/:id', [validaToken, validaRole], function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['estado']);

    Usuario.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                status: false,
                err
            });
        }

        res.json({
            status: true,
            usuario: usuarioDB
        });
    });
});


module.exports = app;