//configuracoes do banco
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'list-node',
    define: {
        timestamp: true, //cria colunas de infor sobre os registros (create, update_at)
        underscored: true, // canelCase
        underscoredAll: true,
    }
}