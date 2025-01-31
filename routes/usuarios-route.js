const { Router } = require("express");
const UsuariosController = require("../controllers/UsuariosController");

const router = Router();

router.get('/usuarios', UsuariosController.selecionarTodosUsuarios);
router.get('/usuarios/:id', UsuariosController.selecionarUsuariosPorId);
router.post('/usuarios', UsuariosController.criarUsuario);
router.put('/usuarios/:id', UsuariosController.atualizarUsuario);
router.delete('/usuarios/:id', UsuariosController.deletarUsuario);

module.exports = router;
