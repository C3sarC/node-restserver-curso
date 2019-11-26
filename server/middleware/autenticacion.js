const jwt = require('jsonwebtoken');

//validar token

let validaToken = (req, res, next) => {
    let token1 = req.get('token');
    jwt.verify(token1, process.env.SEMILLA, (err, decode) => {

        if (err) {
            return res.status(401).json({
                status: false,
                err
            });
        }

        req.usuario = decode.usuario;

        next();
    });
};

let validaRole = (req, res, next) => {
    let usuario = req.usuario;

    console.log('validate role' + usuario.role);
    if (usuario.role != 'admin') {
        return res.status(401).json({
            status: false,
            err: {
                message: 'No tiene permisos para realizar esta accion'
            }
        });
    }

    next();
};

module.exports = {
    validaToken,
    validaRole
}