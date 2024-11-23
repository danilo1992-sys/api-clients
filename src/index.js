import express from 'express'
import cors from 'cors'
import router from './routes.js'
import mongoose from 'mongoose'
process.loadEnvFile()

const app = express()
const port = 3000
const db = process.env.DB_CONNECT

app.use(cors())
app.use(express.json())
app.use('/clients', router)

mongoose.connect(db)

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to app express' })
})

app.get('*', (req, res) => {
  res.status(404).send('La pagina no existe')
})

app.listen(port, () => {
  console.log('app listening')
})
