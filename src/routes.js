const { Router } = require('express')

const product = require('./controller')

const router = Router()

router.get('/', product.getProduct)

module.exports = router