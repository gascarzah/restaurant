const platosModels = require('../models/platos')

class platos {
    list() {
        return new Promise((resolve, reject) => {
            platosModels.find((error, data) => {
                if (error)
                    reject(error)

                resolve(data)
            })
        })
    }
}

module.exports = new platos