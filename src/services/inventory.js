import Joi from 'joi';

export default class InventoryService {
    constructor(db) {
        this.db = db;
    }

    async index(options) {
        const query = {
            limit: options.limit ?? 15,
            offset: options.offset ?? 0
        };
        const inventory = await this.db.Inventory.findAll(query);
        return inventory;
    }
  
    async show(options) {
        const schema = Joi.object({
            inventoryId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const inventory = await this.db.Inventory.findByPk(options.inventoryId);
        return inventory;
    }

    async create(options) {
        const schema = Joi.object({
            part_id: Joi.string().uuid().required(),
            location: Joi.string().optional(),
            quantity_on_hand: Joi.number().optional()
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const inventory = await this.db.Inventory.create(options);
        return inventory;
    }
    async update(options) {
        const schema = Joi.object({
            inventoryId: Joi.string().uuid().required(),
            part_id: Joi.string().uuid().optional(),
            location: Joi.string().optional(),
            quantity_on_hand: Joi.number().optional()
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const [updated] = await this.db.Inventory.update(options, { where: { id: options.inventoryId } });
        if (!updated) return null;
        const inventory = await this.db.Inventory.findByPk(req.params.inventoryId);
        return inventory;
    }

    async delete(options) {
        const schema = Joi.object({
            inventoryId: Joi.string().uuid().required(),
        }).options({ abortEarly: false });
        await schema.validateAsync(options);
        const deleted = await this.db.Inventory.destroy({ where: { id: options.inventoryId } });
        return deleted;
    }
}