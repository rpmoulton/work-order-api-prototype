import assert from 'assert';
import InventoryService from '../../services/inventory.js';
import base from '../factories/index.js';

const partId = 'd8ef60c7-dd0e-4e92-bc03-52fc0c170e71';
const inventoryId = '56ba721d-a343-4282-9ea8-9b7fc8d6cef6';

describe('InventoryService Joi Schemas', function() {
    let service;
    before(async function() {
        service = new InventoryService(base.getModels());
        await base.factory.create('Part', {
            id: partId,
            location: 'test',
            sku: 'test 1',
            unit_price: 111.22,
        });
    });

    describe('show schema', function() {
        it('should validate a valid inventoryId', async function() {
            const valid = { inventoryId };
            await assert.doesNotReject(() => service.show(valid));
        });

        it('should reject missing inventoryId', async function() {
            const invalid = {};
            await assert.rejects(() => service.show(invalid));
        });

        it('should reject invalid inventoryId', async function() {
            const invalid = { inventoryId: 'not-a-uuid' };
            await assert.rejects(() => service.show(invalid));
        });
    });

    describe('create schema', function() {
        it('should validate with required part id', async function() {
            const valid = { part_id: partId, location: 'John Doe' };
            await assert.doesNotReject(() => service.create(valid));
        });

        it('should validate with location and valid quantity_on_hand', async function() {
            const valid = { part_id: partId, location: 'John Doe', quantity_on_hand: 53 };
            await assert.doesNotReject(() => service.create(valid));
        });

        it('should reject missing part id', async function() {
            const invalid = { quantity_on_hand: 22 };
            await assert.rejects(() => service.create(invalid));
        });

        it('should reject invalid quantity_on_hand', async function() {
            const invalid = { part_id: partId, location: 'John Doe', quantity_on_hand: 'not-an-quantity_on_hand' };
            await assert.rejects(() => service.create(invalid));
        });
    });

    describe('update schema', function() {
        it('should validate with no fields (all optional)', async function() {
            const valid = {inventoryId};
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should validate with valid quantity_on_hand', async function() {
            const valid = {inventoryId, quantity_on_hand: 223 };
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should reject invalid quantity_on_hand', async function() {
            const invalid = {inventoryId, quantity_on_hand: 'bad-quantity_on_hand' };
            await assert.rejects(() => service.update(invalid));
        });
    });

    describe('delete schema', function() {
        it('should validate a valid inventoryId', async function() {
            const valid = { inventoryId };
            await assert.doesNotReject(() => service.delete(valid));
        });

        it('should reject missing inventoryId', async function() {
            const invalid = {};
            await assert.rejects(() => service.delete(invalid));
        });

        it('should reject invalid inventoryId', async function() {
            const invalid = { inventoryId: 'not-a-uuid' };
            await assert.rejects(() => service.delete(invalid));
        });
    });
});