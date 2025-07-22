import assert from 'assert';
import CustomerService from '../../services/customers.js';
import base from '../factories/index.js';

const customerId = '123e4567-e89b-12d3-a456-426614174000';

describe('CustomerService Joi Schemas', function() {
    let service;
    before(function() {
        service = new CustomerService(base.getModels());
    });

    afterEach(async() => {
        await service.delete({customerId});
    });

    describe('show schema', function() {
        it('should validate a valid customerId', async function() {
            const valid = { customerId };
            await assert.doesNotReject(() => service.show(valid));
        });

        it('should reject missing customerId', async function() {
            const invalid = {};
            await assert.rejects(() => service.show(invalid));
        });

        it('should reject invalid customerId', async function() {
            const invalid = { customerId: 'not-a-uuid' };
            await assert.rejects(() => service.show(invalid));
        });
    });

    describe('create schema', function() {
        it('should validate with required name', async function() {
            const valid = { name: 'John Doe' };
            await assert.doesNotReject(() => service.create(valid));
        });

        it('should validate with name and valid email', async function() {
            const valid = { name: 'John Doe', email: 'john@example.com' };
            await assert.doesNotReject(() => service.create(valid));
        });

        it('should reject missing name', async function() {
            const invalid = { email: 'john@example.com' };
            await assert.rejects(() => service.create(invalid));
        });

        it('should reject invalid email', async function() {
            const invalid = { name: 'John Doe', email: 'not-an-email' };
            await assert.rejects(() => service.create(invalid));
        });
    });

    describe('update schema', function() {
        beforeEach(async() => {
            await base.factory.create('Customer', {
                id: customerId,
                name: 'Customer 1',
                email: 'abc@123.com',
                phone: '1111111111',
            });
        });

        it('should validate with no fields (all optional)', async function() {
            const valid = { customerId };
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should validate with valid email', async function() {
            const valid = { customerId, email: 'john@example.com' };
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should reject invalid email', async function() {
            const invalid = { customerId, email: 'bad-email' };
            await assert.rejects(() => service.update(invalid));
        });
    });

    describe('delete schema', function() {
        beforeEach(async() => {
            await base.factory.create('Customer', {
                id: customerId,
                name: 'Customer 1',
                email: 'abc@123.com',
                phone: '1111111111',
            });
        });

        it('should validate a valid customerId', async function() {
            const valid = { customerId };
            await assert.doesNotReject(() => service.delete(valid));
        });

        it('should reject missing customerId', async function() {
            const invalid = {};
            await assert.rejects(() => service.delete(invalid));
        });

        it('should reject invalid customerId', async function() {
            const invalid = { customerId: 'not-a-uuid' };
            await assert.rejects(() => service.delete(invalid));
        });
    });
});