'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tarefas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tarefas.belongsTo(models.usuarios, {
        foreignKey: "usuario_id"
      });
    }
  }
  tarefas.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    status: DataTypes.STRING,
    data_criacao: DataTypes.DATE,
    data_conclusao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tarefas',
  });
  return tarefas;
};