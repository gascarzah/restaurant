var express = require('express')

var router = express.Router()

const clientesRouter = require('../controllerjs/clientes')

router.get('/', function(req, res) {
    clientesRouter.list().then(
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