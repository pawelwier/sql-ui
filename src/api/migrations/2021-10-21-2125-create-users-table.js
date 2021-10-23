module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Users')
  }
}
