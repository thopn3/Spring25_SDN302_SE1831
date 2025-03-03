const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('categoryId', '-_id name');
        if(products==null)
            res.status(404).json({message: 'Product not found'});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: "Fetching all product error!"
        });
    }
};

exports.addNewProduct = async (req, res) => {
    try {
        if(!req.body)
            res.status(400).json({message: "Bad request!"});
        const newProduct = req.body;
        const insetedProduct = new Product(newProduct);
        await insetedProduct.save()
            .then(newDoc => res.status(201).json(newDoc));
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: `Create product error: ${error}`
        });
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);

        if(!product)
            res.status(404).json({message: 'Product not found!'});
        // Delete action
        const delDoc = await Product.findByIdAndDelete(id).exec();
        res.status(200).json({
            message: "Delete successfully!",
            deletedData: delDoc
        });
    } catch (error) {
       next(error);
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {name, price, stock, categoryId} = req.body;
        const product = await Product.findById(id);

        if(!product)
            res.status(404).json({message: 'Product not found!'});
        
        // Update values -> Properties of product
        product.name = name;
        product.price = price;
        product.stock = stock;
        product.categoryId = categoryId;

        const updatedDoc = await product.save();

        res.status(200).json({
            message: "Update successfully!",
            updatedData: updatedDoc
        });
    } catch (error) {
       next(error);
    }
}

