import assert from 'assert';
import ProductService from '../../services/products.js';
import base from '../factories/index.js';

const customerId = '123e4567-e89b-12d3-a456-426614174000';
const productId = '123e4567-e89b-12d3-a456-426614174001';

describe('ProductService Joi Schemas', function() {
    let service;
    before(async function() {
        service = new ProductService(base.getModels());
        await base.factory.create('Customer', {
            id: customerId,
        });
    });

    describe('show schema', function() {
        it('should validate a valid productId', async function() {
            const valid = { productId };
            await assert.doesNotReject(() => service.show(valid));
        });

        it('should reject missing productId', async function() {
            await assert.rejects(() => service.show({}));
        });

        it('should reject invalid productId', async function() {
            await assert.rejects(() => service.show({ productId: 'bad' }));
        });
    });

    describe('create schema', function() {
        it('should validate all required fields', async function() {
            const valid = {
                model_number: 'MN123',
                serial_number: 'SN456',
                customer_id: customerId,
            };
            await assert.doesNotReject(() => service.create(valid));
        });

        it('should reject missing fields', async function() {
            await assert.rejects(() => service.create({}));
        });

        it('should reject invalid customer_id', async function() {
            const invalid = {
                model_number: 'MN123',
                serial_number: 'SN456',
                customer_id: 'bad'
            };
            await assert.rejects(() => service.create(invalid));
        });
    });

    describe('update schema', function() {
        it('should validate with only id', async function() {
            const valid = { productId };
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should reject missing id', async function() {
            await assert.rejects(() => service.update({}));
        });

        it('should reject invalid id', async function() {
            await assert.rejects(() => service.update({ id: 'bad' }));
        });

        it('should reject invalid customer_id', async function() {
            await assert.rejects(() => service.update({
                productId,
                customer_id: 'bad'
            }));
        });
    });

    describe('delete schema', function() {
        it('should validate a valid productId', async function() {
            const valid = { productId };
            await assert.doesNotReject(() => service.delete(valid));
        });

        it('should reject missing productId', async function() {
            await assert.rejects(() => service.delete({}));
        });

        it('should reject invalid productId', async function() {
            await assert.rejects(() => service.delete({ productId: 'bad' }));
        });
    });
});