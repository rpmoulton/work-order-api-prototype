import WorkOrderProductService from '../services/workOrderProducts.js';

class WorkOrderProductController {
    constructor(db) {
        this.workOrderProductService = new WorkOrderProductService(db);
    }
    
    async index(req, res) {
        try {
            res.status(200).json(await this.workOrderProductService.index(req.query));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrderProduct data.');
        }
    }
  
    async show(req, res) {
        try {
            res.status(200).json(await this.workOrderProductService.show(req.params.workOrderProductId));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrderProduct data.');
        }
    }

    async create(req, res) {
        try {
            res.status(200).json(await this.workOrderProductService.create(req.body));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error creating workOrderProduct.');
        }
    }

    async update(req, res) {
        try {
            res.status(200).json(await this.workOrderProductService.update({
                ...req.query,
                ...req.body,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrderProduct data.');
        }
    }

    async delete(req, res) {
        try {
            res.status(200).json(await this.workOrderProductService.destroy({
                workOrderProductId: req.params.workOrderProductId,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrderProduct data.');
        }
    }
}

export default WorkOrderProductController;