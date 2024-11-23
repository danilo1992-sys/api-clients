import { Router } from 'express'
import client from './controller.js'

const router = Router()

router.get('/', client.list)
router.get('/:name', client.get)
router.post('/', client.create)
router.put('/:name', client.update)
router.patch('/:name', client.update)
router.delete('/:name', client.delete)

export default router
