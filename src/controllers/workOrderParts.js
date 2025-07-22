import WorkOrderPartService from '../services/workOrderParts.js';

class WorkOrderPartController {
    constructor(db) {
        this.workOrderPartService = new WorkOrderPartService(db);
    }
    
    async index(req, res) {
        try {
            res.status(200).json(await this.workOrderPartService.index(req.query));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrderPart data.');
        }
    }
  
    async show(req, res) {
        try {
            res.status(200).json(await this.workOrderPartService.show(req.params.workOrderPartId));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrderPart data.');
        }
    }

    async create(req, res) {
        try {
            res.status(200).json(await this.workOrderPartService.create(req.body));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error creating workOrderPart.');
        }
    }

    async update(req, res) {
        try {
            res.status(200).json(await this.workOrderPartService.update({
                ...req.query,
                ...req.body,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrderPart data.');
        }
    }

    async delete(req, res) {
        try {
            res.status(200).json(await this.workOrderPartService.destroy({
                workOrderPartId: req.params.workOrderPartId,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrderPart data.');
        }
    }
}

export default WorkOrderPartController;