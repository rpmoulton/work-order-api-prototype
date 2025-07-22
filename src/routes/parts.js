import PartController from "../controllers/parts.js";
import { Router } from 'express';
import db from '../models/index.js';

const router = Router();

const partController = new PartController(db);

router.get('/', partController.index.bind(partController));
router.get('/:partId', partController.show.bind(partController));
router.post('/', partController.create.bind(partController));
router.put('/:partId', partController.update.bind(partController));
router.delete('/:partId', partController.delete.bind(partController));

export default router;