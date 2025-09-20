const router = require('express').Router();
const { getAllProducts, getProductById, createProduct, updateProductById, deleteProductById  } = require('../controllers/productController')

router.get('/',
  /* #swagger.tags = ['Products']
     #swagger.description = 'Get all products from database' */
  getAllProducts )

  router.get('/:id',
  /* #swagger.tags = ['Products']
     #swagger.description = 'Get a single product by ID' */
  getProductById) 

  router.post('/',
  /* #swagger.tags = ['Products']
     #swagger.description = 'Create a new product' */
  createProduct)

  router.put('/:id',
   /* #swagger.tags = ['Products']
     #swagger.description = 'Update a product by ID'
     #swagger.parameters['id'] = { description: 'Product ID' }
     #swagger.requestBody = {
       required: true,
       content: {
         "application/json": {
           schema: {
             type: "object",
             properties: {
               name: { type: "string" },
               description: { type: "string" },
               price: { type: "number" },
               stock: { type: "number" },
               category: { type: "string" },
               image: { type: "string" }
             },
             required: ["name","price","stock","image"]
           },
           example: {
             name: "Wireless Headset Updated",
             description: "Updated description",
             price: 109.99,
             stock: 25,
             category: "electronics",
             image: "https://example.com/images/headset1.jpg"
           }
         }
       }
     }
  */
  updateProductById
);


   router.delete('/:id',
    /* #swagger.tags = ['Products']
     #swagger.description = 'Delete a product' */
   updateProductById)

  module.exports = router;
