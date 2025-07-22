import ProductService from '../services/products.js';

class ProductController {
    constructor(db) {
        this.productService = new ProductService(db);
    }
    
    async index(req, res) {
        try {
            res.status(200).json(await this.productService.index(req.query));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting product data.');
        }
    }
  
    async show(req, res) {
        try {
            res.status(200).json(await this.productService.show(req.params.productId));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting product data.');
        }
    }

    async create(req, res) {
        try {
            res.status(200).json(await this.productService.create(req.body));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error creating product.');
        }
    }

    async update(req, res) {
        try {
            res.status(200).json(await this.productService.update({
                ...req.query,
                ...req.body,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting product data.');
        }
    }

    async delete(req, res) {
        try {
            res.status(200).json(await this.productService.destroy({
                productId: req.params.productId,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting product data.');
        }
    }
}

export default ProductController;