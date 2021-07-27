import { Router } from "express"

const routes = new Router()

import produtos from "./app/controllers/ProdutosController"

routes.get("/produtos", produtos.index)
routes.get("/produtos/:id", produtos.show)
routes.post("/produtos/", produtos.create)
routes.put("/produtos/:id", produtos.update)
routes.delete("/produtos/:id", produtos.destroy)

export default routes