let items = require("../Items")

const getItems = (req, reply) => {
  reply.send(items)
}

const getItem = (req, reply) => {
  const { id } = req.params
  const item = items.find((item) => item.id === id)
  reply.send(item)
}

const addItem = (req, reply) => {
  const { id, name } = req.body
  const item = {
    id,
    name,
  }
  console.log(item)
  items = [...items, item]
  reply.code(201).send(item)
}

module.exports = {
  getItems,
  getItem,
  addItem,
}
