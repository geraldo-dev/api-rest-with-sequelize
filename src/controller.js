const Product = require('./db/model/Product')

module.exports = {
    async getProduct (req, res){
        try {
            
            const products = await Product.findAll()
            
            res.status(200).json({'products':products})

          } catch (error) {
            res.status(500).json({ error })
          }
    },
    async getByIdProduct (req, res){
      const { id } = req.params
        try {
            
            const product = await Product.findByPk(id)
            console.log(product)

            if(!product){
              return res.status(404).json({'message':'product not found'})
            }
            
            res.status(200).json({'product':product})

          } catch (error) {
            res.status(500).json({ error })
          }
    },
    async createProduct (req, res){
      const { name, description, price, active } = req.body
        try {
          //validações
            
            const product = await Product.create({
               name, description, price, active 
              })
            
            res.status(201).json('new registered product')

          } catch (error) {
            res.status(500).json({ error })
          }
    }
}