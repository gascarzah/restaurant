const clientesModels = require('../models/clientes')

class clientes {
    list() {
        return new Promise((resolve, reject) => {
            clientesModels.find((error, data) => {
                    if (error)
                        reject(error)

                    resolve(data)
                }

            )
        })
    }
}

module.exports = new clientes