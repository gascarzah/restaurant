const categoriasModel = require('../models/categorias')

class categorias {

    list() {
        return new Promise((resolve, reject) => {
                categoriasModel.find((error, data) => {
                    if (error)
                        reject(error)

                    resolve(data)
                })
            }


        )
    }
}

module.exports = new categorias