import WorkOrderPartController from "../controllers/workOrderParts.js";
import { Router } from 'express';
import db from '../models/index.js';

const router = Router();
const workOrderPartController = new WorkOrderPartController(db);

router.get('/', workOrderPartController.index.bind(workOrderPartController));
router.get('/:workOrderPartId', workOrderPartController.show.bind(workOrderPartController));
router.post('/', workOrderPartController.create.bind(workOrderPartController));
router.put('/:workOrderPartId', workOrderPartController.update.bind(workOrderPartController));
router.delete('/:workOrderPartId', workOrderPartController.delete.bind(workOrderPartController));

export default router;