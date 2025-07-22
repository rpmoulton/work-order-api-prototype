import Joi from 'joi';

export default class PartService {
    constructor(db) {
        this.db = db;
    }

    async index(options) {
        const query = {
            limit: options.limit ?? 15,
            offset: options.offset ?? 0
        };
        const parts = await this.db.Part.findAll(query);
        return parts;
    }
  
    async show(options) {
        const schema = Joi.object({
            partId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const part = await this.db.Part.findByPk(options.partId);
        return part;
    }

    async create(options) {
        const schema = Joi.object({
            name: Joi.string().required(),
            sku: Joi.string().optional(),
            unit_price: Joi.number().optional()
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const part = await this.db.Part.create(options);
        return part;
    }
    async update(options) {
        const schema = Joi.object({
            partId: Joi.string().uuid().required(),
            name: Joi.string().optional(),
            sku: Joi.string().optional(),
            unit_price: Joi.number().optional(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const [updated] = await this.db.Part.update(options, { where: { id: options.partId } });
        if (!updated) return null;
        const part = await this.db.Part.findByPk(options.partId);
        return part;
    }

    async delete(options) {
        const schema = Joi.object({
            partId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const deleted = await this.db.Part.destroy({ where: { id: options.partId } });
        return deleted;
    }
}