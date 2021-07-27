'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.createTable('produtos', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nameprod: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            marca: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            departamento: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            qtd: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            valor: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        });

    },

    down: async queryInterface => {
        await queryInterface.dropTable('produtos');

    }
};