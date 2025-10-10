const express = require('express');

const router = express.Router()

// In Memory DataBase

let products = [
    {
        id: '1',
        name: "Wireless Headphone",
        description: "noise cancellation wire headphone with premium sound",
        price: 150,
        category: "Electronics",
        inStock: true
    },
    {
        id: '2',
        name: "Samsung S23 Ultra",
        description: "A very smart phone",
        price: 350,
        category: "Smart Device",
        inStock: true
    },
    {
        id: '3',
        name: "Mac Book 2024",
        description: "Super processor and long life battery",
        price: 700,
        category: "Smart Device",
        inStock: true
    }

]




// ==== Implement the following RESTful routes === //

// GET method List all products
router.get('/api/products', (req, res) =>{
    try{
        console.log("Fetching all products...")
        res.json({
            success: "200 Okay",
            count: products.length,
            data: products
        });
    } catch(error){
        console.error('Error fetching all products:', error);
        res.status(500).json({
            sucess: false,
            message: 'Failed to fetch all products'
        });
    }
});

// GET /api/products/:id get single products by ID (Read)
router.get('/api/products/:id', (req, res) =>{
    try{
        const productId = req.params.id // get Id url parameter
        const product = products.find(p => p.id === productId)

        if(!product){
            res.status(404).json({
                status: 404,
                sucess: false,
                message: `Produts with ID: ${productId} not found`
            })
        }
        res.json({
            sucess: true,
            status: '200 Okay',
            data: product
        });

    } catch(error){
        console.error('There was an error fraching a product by id:', error);
        res.status(500).json({
            sucess: false,
            status: '500 bad',
            message: 'Failed to get a product'
        });
    }
});


module.exports = router;