import InventoryService from '../services/inventory.js';

class InventoryController {
    constructor(db) {
        this.inventoryService = new InventoryService(db);
    }

    async index(req, res) {
        try {
            res.status(200).json(await this.inventoryService.index(req.query));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting inventory data.');
        }
    }
  
    async show(req, res) {
        try {
            res.status(200).json(await this.inventoryService.show(req.params.inventoryId));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting inventory data.');
        }
    }

    async create(req, res) {
        try {
            res.status(200).json(await this.inventoryService.create(req.body));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error creating inventory.');
        }
    }

    async update(req, res) {
        try {
            res.status(200).json(await this.inventoryService.update({
                ...req.query,
                ...req.body,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error updating inventory data.');
        }
    }

    async delete(req, res) {
        try {
            res.status(200).json(await this.inventoryService.destroy({
                inventoryId: req.params.inventoryId,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting customer data.');
        }
    }
}

export default InventoryController;