//Importa o express(auxilia no tratamento de rotas)
import express from "express"
import routes from "./routes"

import './database'
//quando acionada importa arquivos essenciais com express
class App {

    constructor() {
            this.server = express()
            this.middlewares()
            this.routes()
        }
        // camada q intecepta aprovando ou nao as requisicoes
    middlewares() {
        this.server.use(express.json())

    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server