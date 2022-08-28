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
        try {
            
            const products = await Product.findAll()
            
            res.status(200).json({'products':products})

          } catch (error) {
            res.status(500).json({ error })
          }
    }
}