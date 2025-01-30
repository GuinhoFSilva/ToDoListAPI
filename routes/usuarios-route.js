const { Router } = require("express");
const UsuariosController = require("../controllers/UsuariosController");

const router = Router();

router.get('/usuarios', UsuariosController.selecionarTodosUsuarios);
router.post('/usuarios', UsuariosController.criarUsuario);
router.get('/usuarios/:id', UsuariosController.selecionarUsuariosPorId);

module.exports = router;
