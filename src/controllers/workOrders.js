import WorkOrderService from '../services/workOrders.js';

class WorkOrderController {
    constructor(db) {
        this.workOrderService = new WorkOrderService(db);
    }
    
    async index(req, res) {
        try {
            res.status(200).json(await this.workOrderService.index(req.query));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrder data.');
        }
    }
  
    async show(req, res) {
        try {
            res.status(200).json(await this.workOrderService.show(req.params.workOrderId));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrder data.');
        }
    }

    async create(req, res) {
        try {
            res.status(200).json(await this.workOrderService.create(req.body));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error creating workOrder.');
        }
    }

    async update(req, res) {
        try {
            res.status(200).json(await this.workOrderService.update({
                ...req.query,
                ...req.body,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrder data.');
        }
    }

    async delete(req, res) {
        try {
            res.status(200).json(await this.workOrderService.destroy({
                workOrderId: req.params.workOrderId,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting workOrder data.');
        }
    }
}

export default WorkOrderController;