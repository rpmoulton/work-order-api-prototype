import Joi from 'joi';

export default class WorkOrderService {
    constructor(db) {
        this.db = db;
    }

    async index(options) {
        if (options.filter) {
            const query = `
                SELECT 
                    id,
                    customer_id,
                    status,
                    priority,
                    created_at,
                    scheduled_date,
                    completed_at
                FROM work_orders
                WHERE date(scheduled_date) >= date('now', 'weekday 0', '-6 days')
                    AND date(scheduled_date) < date('now', 'weekday 0', '+1 day');
            `;

            return res.json(await this.db.sequelize.query(query, { type: this.db.sequelize.QueryTypes.SELECT }));
        }

        const query = {
            limit: options.limit ?? 15,
            offset: options.offset ?? 0
        };
        const workOrders = await this.db.WorkOrder.findAll(query);
        return workOrders;
    }
  
    async show(options) {
        const schema = Joi.object({
            workOrderId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const workOrder = await this.db.WorkOrder.findByPk(options.workOrderId);
        return workOrder;
    }

    async create(options) {
        const schema = Joi.object({
            customer_id: Joi.string().uuid().required(),
            status: Joi.string().required(),
            priority: Joi.string().required(),
            created_at: Joi.date().optional(),
            scheduled_date: Joi.date().required(),
            completed_at: Joi.date().optional(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const workOrder = await this.db.WorkOrder.create(options);
        return workOrder;
    }
    async update(options) {
        const schema = Joi.object({
            workOrderId: Joi.string().uuid().required(),
            customer_id: Joi.string().uuid().optional(),
            status: Joi.string().optional(),
            priority: Joi.string().optional(),
            created_at: Joi.date().optional(),
            scheduled_date: Joi.date().optional(),
            completed_at: Joi.date().optional(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const [updated] = await this.db.WorkOrder.update(options, { where: { id: options.workOrderId } });
        if (!updated) return null;
        const workOrder = await this.db.WorkOrder.findByPk(options.workOrderId);
        return workOrder;
    }

    async delete(options) {
        const schema = Joi.object({
            workOrderId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const deleted = await this.db.WorkOrder.destroy({ where: { id: options.workOrderId } });
        return deleted;
    }
}