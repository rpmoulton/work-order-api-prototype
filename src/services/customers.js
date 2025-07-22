import Joi from 'joi';

export default class CustomerService {
    constructor(db) {
        this.db = db;
    }

    async index(options) {
        const query = {
            limit: options.limit ?? 15,
            offset: options.offset ?? 0
        };
        const customers = await this.db.Customer.findAll(query);
        return customers;
    }
  
    async show(options) {
        const schema = Joi.object({
            customerId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const customer = await this.db.Customer.findByPk(options.customerId);
        return customer;
    }

    async create(options) {
        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().optional(),
            phone: Joi.string().optional()
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const customer = await this.db.Customer.create(options);
        return customer;
    }
    
    async update(options) {
        const schema = Joi.object({
            customerId: Joi.string().uuid().required(),
            name: Joi.string().optional(),
            email: Joi.string().email().optional(),
            phone: Joi.string().optional()
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const [updated] = await this.db.Customer.update(options, { where: { id: options.customerId } });
        if (!updated) return null;
        const customer = await this.db.Customer.findByPk(options.customerId);
        return customer;
    }

    async delete(options) {
        const schema = Joi.object({
            customerId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const deleted = await this.db.Customer.destroy({ where: { id: options.customerId } });
        return deleted;
    }
}