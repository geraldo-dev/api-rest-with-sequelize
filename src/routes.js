const { Router } = require('express')

const product = require('./controller')

const router = Router()

router.get('/', product.getProduct)
router.get('/:id', product.getByIdProduct)

module.exports = router