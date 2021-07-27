import Sequelize from "sequelize"

import config from "../config/database"

import Produto from "../app/models/Produto"
//apenas produtos esta no array
const models = [Produto]

class Database {
    constructor() {
        //faz ligacao com o banco
        this.connection = new Sequelize(config)
        this.init()
    }

    init() {
        models.forEach(model => model.init(this.connection))
    }
}
export default new Database()