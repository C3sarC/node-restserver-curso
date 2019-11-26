const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarios');


const app = express();

app.post('/login', function(req, res) {

    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                status: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                status: false,
                err: { message: "(Usuario) o Contraseña incorrecto" }
            });
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                status: false,
                err: { message: "Usuario o (Contraseña) incorrecto" }
            });
        }

        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEMILLA, { expiresIn: process.env.EXPIRA_TOKEN });

        res.json({
            status: true,
            usuario: usuarioDB,
            token: token
        });
    });
});

module.exports = app;