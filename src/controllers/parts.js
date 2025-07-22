import PartService from '../services/parts.js';

class PartController {
    constructor(db) {
        this.partService = new PartService(db);
    }
    
    async index(req, res) {
        try {
            res.status(200).json(await this.partService.index(req.query));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting part data.');
        }
    }
  
    async show(req, res) {
        try {
            res.status(200).json(await this.partService.show(req.params.partId));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting part data.');
        }
    }

    async create(req, res) {
        try {
            res.status(200).json(await this.partService.create(req.body));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error creating part.');
        }
    }

    async update(req, res) {
        try {
            res.status(200).json(await this.partService.update({
                ...req.query,
                ...req.body,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting part data.');
        }
    }

    async delete(req, res) {
        try {
            res.status(200).json(await this.partService.destroy({
                partId: req.params.partId,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting part data.');
        }
    }
}

export default PartController;