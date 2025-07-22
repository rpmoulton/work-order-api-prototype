import WorkOrderController from "../controllers/workOrders.js";
import { Router } from 'express';
import db from '../models/index.js';

const router = Router();

const workOrderController = new WorkOrderController(db);

router.get('/', workOrderController.index.bind(workOrderController));
router.get('/:workOrderId', workOrderController.show.bind(workOrderController));
router.post('/', workOrderController.create.bind(workOrderController));
router.put('/:workOrderId', workOrderController.update.bind(workOrderController));
router.delete('/:workOrderId', workOrderController.delete.bind(workOrderController));

export default router;