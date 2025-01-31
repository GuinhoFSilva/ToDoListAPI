const { Router } = require("express");
const TarefasController = require("../controllers/TarefasController");

const router = Router();

router.post('/tarefas', TarefasController.criarTarefa);
router.get('/tarefas', TarefasController.selecionarTodasTarefas);
router.get('/tarefas/:id', TarefasController.selecionarTarefaPorId);
router.put('/tarefas/:id', TarefasController.atualizarTarefa);
router.delete('/tarefas/:id', TarefasController.deletarTarefa);

module.exports = router;
