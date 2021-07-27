import Sequelize, { Model } from "sequelize"

class Produto extends Model {
    static init(sequelize) {
        super.init({
            nameprod: Sequelize.STRING,
            marca: Sequelize.STRING,
            departamento: Sequelize.STRING,
            qtd: Sequelize.INTEGER,
            valor: Sequelize.INTEGER,


        }, {
            sequelize,
        })
    }
}

export default Produto