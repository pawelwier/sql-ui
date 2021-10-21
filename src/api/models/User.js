const {Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = require('../setup/dbSetup')

class User extends Model {}
User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  deletedAt: {
    type: Sequelize.DATE,
  },
}, {
  sequelize,
  modelName: 'User',
  timestamps: true,
})

module.exports = User
