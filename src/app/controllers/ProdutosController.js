import Produto from "../models/Produto"

class ProdutosController {
    //MOSTRA TODA A LISTA
    async index(req, res) {
            try {
                const data = await Produto.findAll({
                    limit: 1000,
                })
                return res.json(data)
            } catch (e) {
                console.log("Erro:", e)
            }
        }
        //MOSTRA SE UM PRODUTO ESPECIFICO ESTA NA LISTA
    async show(req, res) {
            try {
                const id = parseInt(req.params.id)
                const data = await Produto.findAll({
                    where: {
                        id: id
                    }
                })
                return res.json(data)
            } catch (e) {
                console.log("Erro:", e)
            }
        }
        //ADICIONA UM NOVO PRODUTO NA LISTA
    async create(req, res) {
            try {
                const { nameprod, marca, departamento, qtd, valor } = req.body
                const data = await Produto.create({
                    nameprod: nameprod,
                    marca: marca,
                    departamento: departamento,
                    qtd: qtd,
                    valor: valor
                });
                return res.json(data)
            } catch (e) {
                console.log("Erro:", e)
            }
        }
        // AUALIZA AS INFORMACOES DA LISTA DE PRODUTOS
    async update(req, res) {
            try {
                const id = parseInt(req.params.id)
                const { nameprod, marca, departamento, qtd, valor } = req.body
                const data = await Produto.update({
                    nameprod: nameprod,
                    marca: marca,
                    departamento: departamento,
                    qtd: qtd,
                    valor: valor
                }, {
                    where: {
                        id: id
                    }
                });
                return res.json("Atualizado com sucesso!")
            } catch (e) {
                console.log("Erro:", e)
            }
        }
        //EXCLUI UM PRODUTO DA LISTA
    async destroy(req, res) {

        const id = parseInt(req.params.id)
        const data = await Produto.destroy({
            where: {
                id: id
            }
        });
        return res.json("Registro apagado com sucesso")
    } catch (e) {
        console.log("Erro:", e)
    }
}

export default new ProdutosController()