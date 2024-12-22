const Usuario = require('../models/usuario.model');

require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id) => {
    return jwt.sign({ id }, "password", { expiresIn: '30d' });
}

module.exports.createUsuario = async (request, response) => {
    const { email, password } = request.body;
    if (!email || !password) {
        return response.status(400).json({
            message: 'Correo y contraseñas son requiridos'
        });
    } else {
        const usuarioEncontrado = await Usuario.findOne({ email });
        if (usuarioEncontrado) {
            return response.status(400).json({
                message: 'El correo ya está registrado'
            })
        } else {
            const salt = await bcrypt.genSalt(10);
            const passwordEncriptado = await bcrypt.hash(password, salt);
            Usuario.create({
                email, password: passwordEncriptado
            })
                .then(usuario => {
                    console.log(usuario);
                    response.json({ email: usuario.email, _id: usuario._id, token: generateToken(usuario._id) })
                }
                ).catch(err => response.status(500).json(err));
        }
    }
};

module.exports.getUsuario = async (req, res) => {
    const { email, password } = req.body;
    const userFound = await Usuario.findOne({ email });
    //console.log('Usuario encontrado: ', userFound);
    if (userFound && (await bcrypt.compare(password, userFound.password))) {
        res.json({
            message: 'Login User', email: userFound.email, userName:
                userFound.userName, token: generateToken(userFound._id)
        })
    } else {
        res.status(400).json({ message: 'Login Failed' })
    }
};

