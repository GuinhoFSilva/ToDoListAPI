const bodyParser = require('body-parser');
const usuarios = require('./usuarios-route');
const tarefas = require('./tarefas-route');

module.exports = app => {
    app.use(bodyParser.json(),
    usuarios,
    tarefas
    );
}