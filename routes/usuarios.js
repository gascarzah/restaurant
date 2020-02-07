var express = require('express')
var router = express.Router()

const usuariosRouter = require('../controllerjs/usuarios')

router.get('/', function(req, res) {
    usuariosRouter.list().then(
        (sucess) => {
            res.json({
                message: null,
                data: sucess
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