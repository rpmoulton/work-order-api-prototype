import assert from 'assert';
import WorkOrderPartsService from '../../services/workOrderParts.js';
import base from '../factories/index.js';

const customerId = '02ee8fce-6df1-41ba-9634-e6faae6c45b4';
const workOrderId = '5db0d7ef-448b-485f-ba5c-e730f984a3de';
const partId = '123e4567-e89b-12d3-a456-426614174002';

const workOrderPartId = '123e4567-e89b-12d3-a456-426614174000';

describe('WorkOrderPartsService Joi Schemas', function() {
    let service;
    before(async function() {
        service = new WorkOrderPartsService(base.getModels());
        await base.factory.create('Customer', {
            id: customerId,
            name: 'Customer 1',
            email: 'abc@123.com',
            phone: '1111111111',
        });
        await base.factory.create('WorkOrder', {
            id: workOrderId,
            customer_id: customerId,
            status: 'Priority',
            priority: 'High',
            scheduled_date: new Date(),
        });
        await base.factory.create('Part', {
            id: partId,
            name: 'John Doe',
            sku: 'abc',
            unit_price: 15.22,
        });
    });

    describe('show schema', function() {
        it('should validate a valid workOrderPartId', async function() {
            const valid = { workOrderPartId };
            await assert.doesNotReject(() => service.show(valid));
        });

        it('should reject missing workOrderPartId', async function() {
            const invalid = {};
            await assert.rejects(() => service.show(invalid));
        });

        it('should reject invalid workOrderPartId', async function() {
            const invalid = { workOrderPartId: 'not-a-uuid' };
            await assert.rejects(() => service.show(invalid));
        });
    });

    describe('create schema', function() {
        it('should validate with required name', async function() {
            const valid = { 
                part_id: partId,
                work_order_id: workOrderId,
             };
            await assert.doesNotReject(() => service.create(valid));
        });

        it('should reject missing part_id', async function() {
            const invalid = { work_order_id: workOrderId, };
            await assert.rejects(() => service.create(invalid));
        });

        it('should reject invalid part_id', async function() {
            const invalid = { part_id: 'not-a-part_id' };
            await assert.rejects(() => service.create(invalid));
        });
    });

    describe('update schema', function() {
        it('should validate with no fields (all optional)', async function() {
            const valid = {workOrderPartId};
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should validate with valid email', async function() {
            const valid = { workOrderPartId, work_order_id: workOrderId, };
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should reject invalid email', async function() {
            const invalid = { work_order_id: 'bad-email' };
            await assert.rejects(() => service.update(invalid));
        });
    });

    describe('delete schema', function() {
        it('should validate a valid workOrderPartId', async function() {
            const valid = { workOrderPartId: '123e4567-e89b-12d3-a456-426614174000' };
            await assert.doesNotReject(() => service.delete(valid));
        });

        it('should reject missing workOrderPartId', async function() {
            const invalid = {};
            await assert.rejects(() => service.delete(invalid));
        });

        it('should reject invalid workOrderPartId', async function() {
            const invalid = { workOrderPartId: 'not-a-uuid' };
            await assert.rejects(() => service.delete(invalid));
        });
    });
});