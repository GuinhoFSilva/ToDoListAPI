const database = require("../models");

class UsuariosController{
    static async criarUsuario(req, res){
        const dadosUsuario = req.body; 
    try{
        const checarEmail = await database.usuarios.findOne({where: {email: req.body.email}});

        if(checarEmail){
            return res.status(400).send("Já existe um usuário cadastrado com este email!");
        }

            const create = await database.usuarios.create(dadosUsuario);
            return res.status(201).json(create);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async selecionarTodosUsuarios(req, res){
        try{
            const select = await database.usuarios.findAll();
            return res.status(200).json(select);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async selecionarUsuariosPorId(req, res){
        const {id} = req.params;
        try{
            const select = await database.usuarios.findOne({where: {id: Number(id)}});
            return res.status(200).json(select);
        } catch {
            return res.status(500).json(error.message);
        }
    }
    static async atualizarUsuario(req, res){
        const {id} = req.params;
        const novosDados = req.body;
        try{
            await database.usuarios.update(novosDados, {where: {id: Number(id)}});
            const select = await database.usuarios.findOne({where: {id: Number(id)}});
            return res.status(200).json(select);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }
    static async deletarUsuario(req, res){
        const {id} = req.params;
        try{
            await database.usuarios.destroy({where: {id: Number(id)}});
            return res.status(200).send("Usuário deletado com sucesso!");
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = UsuariosController;