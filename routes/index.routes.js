import { Router } from 'express'
import Product from '../models/product.model.js'

const router = Router();

router.get('/', (req, res) => res.send('Hello Express app!'))

router.get('/ping', (req, res) => res.send('Pong!'))


export default router;

