import InventoryController from "../controllers/inventory.js";
import { Router } from 'express';
import db from '../models/index.js';

const router = Router();

const inventoryController = new InventoryController(db);

router.get('/', inventoryController.index.bind(inventoryController));
router.get('/:inventoryId', inventoryController.show.bind(inventoryController));
router.post('/', inventoryController.create.bind(inventoryController));
router.put('/:inventoryId', inventoryController.update.bind(inventoryController));
router.delete('/:inventoryId', inventoryController.delete.bind(inventoryController));

export default router;