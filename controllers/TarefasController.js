const database = require('../models');

class TarefasController {
    static async criarTarefa(req, res){
        const dados = req.body;
        try{
            const create = await database.tarefas.create(dados);
            return res.status(201).json(create);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async selecionarTodasTarefas(req, res){
        try{
            const select = await database.tarefas.findAll();
            return res.status(200).json(select);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async selecionarTarefaPorId(req, res){
        const {id} = req.params;
        try{
            const select = await database.tarefas.findOne({where: {id: Number(id)}});
            if(!select){
                return res.status(404).send("Não foi possível encontrar uma tarefa com este id!");
            }
            return res.status(200).json(select);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizarTarefa(req, res){
        const {id} = req.params;
        const novosDados = req.body;
        try{
            await database.tarefas.update(novosDados, {where: {id: Number(id)}});
            const select = await database.tarefas.findOne({where: {id: Number(id)}});
            if(!select){
                return res.status(404).send("Não foi possível encontrar uma tarefa com este id!");
            }
            return res.status(200).json(select);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async deletarTarefa(req, res){
        const {id} = req.params;
        try{
            const tarefaExistente = await database.tarefas.findOne({where: {id: Number(id)}});
            if(!tarefaExistente){
                return res.status(404).send("Não foi possível encontrar uma tarefa com este id!");
            }
            await database.tarefas.destroy({where: {id: Number(id)}});
            return res.status(200).send("Tarefa deletada com sucesso!");
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TarefasController;