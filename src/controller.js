import Clients from './schema.js'

const client = {
  get: async (res, req) => {
    const { name } = req.params
    const client = await Clients.findOne({ name })
    res.status(200).send(client)
  },
  list: async (req, res) => {
    const client = await Clients.find()
    res.status(200).send(client)
  },
  create: async (req, res) => {
    console.log(req.body)
    const name = new Clients(req.body)
    const saveClient = await name.save()
    res.status(201).send(saveClient.name)
  },
  update: async (req, res) => {
    const { name } = req.params
    const updateClient = await Clients.findOne({ name: neme })
    Object.assing(updateClient, req.body)
    await name.save()
    res.status(204)
  },
  delete: async (req, res) => {
    const { name } = req.params
    const deleteClient = await Clients.findOne({ name: name })
    if (deleteClient) {
      deleteClient.deleteOne()
    }
    console.log("Usuario eliminado con exito")
    res.status(204)
  }

}

export default client
