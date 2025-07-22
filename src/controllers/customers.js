import CustomerService from '../services/customers.js';

class CustomerController {
    constructor(db) {
        this.customerService = new CustomerService(db);
    }
    
    async index(req, res) {
        try {
            res.status(200).json(await this.customerService.index(req.query));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting customer data.');
        }
    }
  
    async show(req, res) {
        try {
            res.status(200).json(await this.customerService.show(req.params.customerId));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting customer data.');
        }
    }

    async create(req, res) {
        try {
            res.status(200).json(await this.customerService.create(req.body));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error creating customer.');
        }
    }

    async update(req, res) {
        try {
            res.status(200).json(await this.customerService.update({
                ...req.query,
                ...req.body,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting customer data.');
        }
    }

    async delete(req, res) {
        try {
            res.status(200).json(await this.customerService.destroy({
                customerId: req.params.customerId,
            }));
        } catch (e) {
            console.log(e.message);
            res.status(403).send('Error getting customer data.');
        }
    }
}

export default CustomerController;