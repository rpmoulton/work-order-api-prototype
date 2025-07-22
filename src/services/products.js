import Joi from 'joi';

export default class ProductService {
    constructor(db) {
        this.db = db;
    }

    async index(options) {
        const query = {
            limit: options.limit ?? 15,
            offset: options.offset ?? 0
        };
        const products = await this.db.Product.findAll(query);
        return products;
    }
  
    async show(options) {
        const schema = Joi.object({
            productId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const product = await this.db.Product.findByPk(options.productId);
        return product;
    }

    async create(options) {
        const schema = Joi.object({
            model_number: Joi.string().required(),
            serial_number: Joi.string().required(),
            customer_id: Joi.string().uuid().required()
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const product = await this.db.Product.create(options);
        return product;
    }
    async update(options) {
        const schema = Joi.object({
            productId: Joi.string().uuid().required(),
            model_number: Joi.string().optional(),
            serial_number: Joi.string().optional(),
            customer_id: Joi.string().uuid().optional()
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const [updated] = await this.db.Product.update(options, { where: { id: options.productId } });
        if (!updated) return null;
        const product = await this.db.Product.findByPk(req.params.productId);
        return product;
    }

    async delete(options) {
        const schema = Joi.object({
            productId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const deleted = await this.db.Product.destroy({ where: { id: options.productId } });
        return deleted;
    }
}