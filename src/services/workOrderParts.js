import Joi from 'joi';

export default class WorkOrderPartService {
    constructor(db) {
        this.db = db;
    }

    async index(options) {
        const query = {
            limit: options.limit ?? 15,
            offset: options.offset ?? 0
        };
        const workOrderParts = await this.db.WorkOrderPart.findAll(query);
        return workOrderParts;
    }
  
    async show(options) {
        const schema = Joi.object({
            workOrderPartId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const workOrderPart = await this.db.WorkOrderPart.findByPk(options.workOrderPartId);
        return workOrderPart;
    }

    async create(options) {
        const schema = Joi.object({
            work_order_id: Joi.string().uuid().required(),
            part_id: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const workOrderPart = await this.db.WorkOrderPart.create(options);
        return workOrderPart;
    }
    async update(options) {
        const schema = Joi.object({
            workOrderPartId: Joi.string().uuid().optional(),
            work_order_id: Joi.string().uuid().optional(),
            part_id: Joi.string().uuid().optional(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const [updated] = await this.db.WorkOrderPart.update(options, { where: { id: options.workOrderPartId } });
        if (!updated) return null;
        const workOrderPart = await this.db.WorkOrderPart.findByPk(options.workOrderPartId);
        return workOrderPart;
    }

    async delete(options) {
        const schema = Joi.object({
            workOrderPartId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const deleted = await this.db.WorkOrderPart.destroy({ where: { id: options.workOrderPartId } });
        return deleted;
    }
}