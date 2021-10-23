const User = require('../models/User')

const getAllUsers = async (req, res) => {
  const users = await User.findAll({raw: true})
  res.json(users)
}

const addUser = async (req, res) => {
  const {name, age} = req.body
  const user = await User.create({name, age})
  res.json(user)
}

module.exports = {
  getAllUsers,
  addUser,
}
