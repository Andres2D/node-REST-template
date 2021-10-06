const { response } = require('express');

const usersGet = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'GET - api - controller'
    });
}

const usersPut = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'PUT - api'
    });
}

const usersPost = (req, res = response) => {
    res.status(201).json({
        ok: true,
        msg: 'POST - api'
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'DELETE - api'
    });
}

const usersPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'PATCH - api'
    });
}
 
module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}