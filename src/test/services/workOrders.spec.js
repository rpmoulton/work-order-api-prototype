import assert from 'assert';
import WorkOrderService from '../../services/workOrders.js';
import base from '../factories/index.js';

const customerId = '5db0d7ef-448b-485f-ba5c-e730f984a3de';
const workOrderId = '02ee8fce-6df1-41ba-9634-e6faae6c45b4';

describe('WorkOrderService Joi Schemas', function() {
    let service;
    before(async function() {
        service = new WorkOrderService(base.getModels());
        await base.factory.create('Customer', {
            id: customerId,
            name: 'Customer 1',
            email: 'abc@123.com',
            phone: '1111111111',
        });
    });

    describe('show schema', function() {
        it('should validate a valid workOrderId', async function() {
            const valid = { workOrderId };
            await assert.doesNotReject(() => service.show(valid));
        });

        it('should reject missing workOrderId', async function() {
            const invalid = {};
            await assert.rejects(() => service.show(invalid));
        });

        it('should reject invalid workOrderId', async function() {
            const invalid = { workOrderId: 'not-a-uuid' };
            await assert.rejects(() => service.show(invalid));
        });
    });

    describe('create schema', function() {
        it('should validate with required name', async function() {
            const valid = { 
                customer_id: customerId,
                status: 'Priority',
                priority: 'High',
                scheduled_date: new Date(),
             };
            await assert.doesNotReject(() => service.create(valid));
        });

        it('should validate with created_at and valid completed_at', async function() {
            const valid = { 
                customer_id: customerId,
                status: 'Priority',
                priority: 'High',
                scheduled_date: new Date(),
                created_at: new Date(),
                completed_at: new Date(),
             };
            await assert.doesNotReject(() => service.create(valid));
        });

        it('should reject missing status', async function() {
            const invalid = { 
                customer_id: customerId,
                priority: 'High',
                scheduled_date: new Date(),
             };
            await assert.rejects(() => service.create(invalid));
        });

        it('should reject missing date', async function() {
            const invalid = { 
                customer_id: customerId,
                status: 'Priority',
                priority: 'High',
             };
            await assert.rejects(() => service.create(invalid));
        });
    });

    describe('update schema', function() {
        it('should validate with no fields (all optional)', async function() {
            const valid = { 
                workOrderId,
             };
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should validate with valid data', async function() {
            const valid = { 
                workOrderId,
                customer_id: customerId,
                status: 'Priority',
                priority: 'High',
             };
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should reject invalid payload', async function() {
            const invalid = { email: 'bad-email' };
            await assert.rejects(() => service.update(invalid));
        });
    });

    describe('delete schema', function() {
        it('should validate a valid workOrderId', async function() {
            const valid = { workOrderId };
            await assert.doesNotReject(() => service.delete(valid));
        });

        it('should reject missing workOrderId', async function() {
            const invalid = {};
            await assert.rejects(() => service.delete(invalid));
        });

        it('should reject invalid workOrderId', async function() {
            const invalid = { workOrderId: 'not-a-uuid' };
            await assert.rejects(() => service.delete(invalid));
        });
    });
});