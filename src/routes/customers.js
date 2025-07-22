import CustomerController from "../controllers/customers.js";
import { Router } from 'express';
import db from '../models/index.js';

const router = Router();

const customerController = new CustomerController(db);

router.get('/', customerController.index.bind(customerController));
router.get('/:customerId', customerController.show.bind(customerController));
router.post('/', customerController.create.bind(customerController));
router.put('/:customerId', customerController.update.bind(customerController));
router.delete('/:customerId', customerController.delete.bind(customerController));

export default router;