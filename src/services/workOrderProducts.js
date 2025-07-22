import Joi from 'joi';

export default class WorkOrderProductService {
    constructor(db) {
        this.db = db;
    }

    async index(options) {
        const query = {
            limit: options.limit ?? 15,
            offset: options.offset ?? 0
        };
        const workOrderProducts = await this.db.WorkOrderProduct.findAll(query);
        return workOrderProducts;
    }
  
    async show(options) {
        const schema = Joi.object({
            workOrderProductId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const workOrderProduct = await this.db.WorkOrderProduct.findByPk(options.workOrderProductId);
        return workOrderProduct;
    }

    async create(options) {
        const schema = Joi.object({
            work_order_id: Joi.string().uuid().required(),
            product_id: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const workOrderProduct = await this.db.WorkOrderProduct.create(options);
        return workOrderProduct;
    }
    async update(options) {
        const schema = Joi.object({
            workOrderProductId: Joi.string().uuid().required(),
            work_order_id: Joi.string().uuid().optional(),
            product_id: Joi.string().uuid().optional(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const [updated] = await this.db.WorkOrderProduct.update(options, { where: { id: options.workOrderProductId } });
        if (!updated) return null;
        const workOrderProduct = await this.db.WorkOrderProduct.findByPk(options.workOrderProductId);
        return workOrderProduct;
    }

    async delete(options) {
        const schema = Joi.object({
            workOrderProductId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const deleted = await this.db.WorkOrderProduct.destroy({ where: { id: options.workOrderProductId } });
        return deleted;
    }
}