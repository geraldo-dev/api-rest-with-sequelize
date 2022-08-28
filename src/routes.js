const { Router } = require('express')

const product = require('./controller')

const router = Router()

router.get('/', product.getProduct)
router.get('/:id', product.getByIdProduct)
router.post('/', product.createProduct)
router.put('/:id', product.updateProduct)
router.delete('/:id', product.deleteProduct)

module.exports = router