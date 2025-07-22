import ProductController from "../controllers/products.js";
import { Router } from 'express';
import db from '../models/index.js';

const router = Router();
const productController = new ProductController(db);

router.get('/', productController.index.bind(productController));
router.get('/:productId', productController.show.bind(productController));
router.post('/', productController.create.bind(productController));
router.put('/:productId', productController.update.bind(productController));
router.delete('/:productId', productController.delete.bind(productController));

export default router;