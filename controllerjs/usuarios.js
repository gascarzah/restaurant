const usuariosModels = require('../models/usuarios')

class usuarios {

    list() {
        return new Promise((resolve, reject) => {
            usuariosModels.find((error, data) => {
                if (error)
                    reject(error)

                resolve(data)
            })
        })
    }
}

module.exports = new usuarios