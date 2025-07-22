import assert from 'assert';
import PartService from '../../services/parts.js';
import base from '../factories/index.js';

const partId = '123e4567-e89b-12d3-a456-426614174002';

describe('PartService Joi Schemas', function() {
    let service;
    before(function() {
        service = new PartService(base.getModels());
    });

    afterEach(async() => {
        await service.delete({partId})
    });

    describe('show schema', function() {
        it('should validate a valid partId', async function() {
            const valid = { partId };
            await assert.doesNotReject(() => service.show(valid));
        });

        it('should reject missing partId', async function() {
            const invalid = {};
            await assert.rejects(() => service.show(invalid));
        });

        it('should reject invalid partId', async function() {
            const invalid = { partId: 'not-a-uuid' };
            await assert.rejects(() => service.show(invalid));
        });
    });

    describe('create schema', function() {
        it('should validate with required name', async function() {
            const valid = { name: 'John Doe' };
            await assert.doesNotReject(() => service.create(valid));
        });

        it('should validate with name and valid email', async function() {
            const valid = { name: 'John Doe', sku: 'abc', unit_price: 15.22 };
            await assert.doesNotReject(() => service.create(valid));
        });

        it('should reject missing key', async function() {
            const invalid = { unit_price: 'john@example.com' };
            await assert.rejects(() => service.create(invalid));
        });

        it('should reject invalid key', async function() {
            const invalid = { name: 'John Doe', email: 'not-an-email' };
            await assert.rejects(() => service.create(invalid));
        });
    });

    describe('update schema', function() {
        it('should validate with just partId', async function() {
            const valid = {partId};
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should validate with valid unit price', async function() {
            const valid = { partId, unit_price: 103.22 };
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should reject invalid unit price', async function() {
            const invalid = { unit_price: 'bad-unit-price' };
            await assert.rejects(() => service.update(invalid));
        });
    });

    describe('delete schema', function() {
        it('should validate a valid partId', async function() {
            const valid = { partId };
            await assert.doesNotReject(() => service.delete(valid));
        });

        it('should reject missing partId', async function() {
            const invalid = {};
            await assert.rejects(() => service.delete(invalid));
        });

        it('should reject invalid partId', async function() {
            const invalid = { partId: 'not-a-uuid' };
            await assert.rejects(() => service.delete(invalid));
        });
    });
});