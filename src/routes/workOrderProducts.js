import WorkOrderProductController from "../controllers/workOrderProducts.js";
import { Router } from 'express';
import db from '../models/index.js';

const router = Router();
const workOrderProductController = new WorkOrderProductController(db);

router.get('/', workOrderProductController.index.bind(workOrderProductController));
router.get('/:workOrderProductId', workOrderProductController.show.bind(workOrderProductController));
router.post('/', workOrderProductController.create.bind(workOrderProductController));
router.put('/:workOrderProductId', workOrderProductController.update.bind(workOrderProductController));
router.delete('/:workOrderProductId', workOrderProductController.delete.bind(workOrderProductController));

export default router;