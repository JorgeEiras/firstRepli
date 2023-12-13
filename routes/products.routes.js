import { Router } from 'express'
import { getProducts, getProduct, getProductis, createProducts, updateProducts, deleteProducts } from '../controllers/products.controller.js'
import fileUpload from 'express-fileupload'

const router = Router()

router.get('/products', getProducts)

//router.get('/products/:id', getProduct)

router.get('/products/:page', getProductis)

router.post('/products', fileUpload({ useTempFiles: true, tempFileDir: './uploads' })
  , createProducts)

router.put('/products/:id', updateProducts)

router.delete('/products/:id', deleteProducts)


export default router