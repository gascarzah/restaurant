var express = require('express')
var router = express.Router()

const platosRouter = require('../controllerjs/platos')

router.get('/', function(req, res) {
    platosRouter.list().then(
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