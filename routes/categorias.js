var express = require('express');

var router = express.Router();

const categoriasController = require('../controllerjs/categorias')

router.get('/', function(req, res) {
    categoriasController.list().then(
        (success) => {
            res.json({
                message: null,
                data: success
            })
        },
        (error) => {
            res.status(400).json({
                message: error.message,
                data: null
            })
        }
    )


})

module.exports = router