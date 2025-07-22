import assert from 'assert';
import WorkOrderProductService from '../../services/workOrderProducts.js';
import base from '../factories/index.js';

const customerId = '56ba721d-a343-4282-9ea8-9b7fc8d6cef6';
const workOrderId = '02ee8fce-6df1-41ba-9634-e6faae6c45b4';
const productId = '5db0d7ef-448b-485f-ba5c-e730f984a3de';

const workOrderProductId = '123e4567-e89b-12d3-a456-426614174000';

describe('WorkOrderProductService Joi Schemas', function() {
    let service;
    before(async function() {
        service = new WorkOrderProductService(base.getModels());
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
        await base.factory.create('Product', {
            id: productId,
            model_number: 'XYZ-222',
            serial_number: 'a234ks73ksamsnd',
            customer_id: customerId,
        });
    });

    describe('show schema', function() {
        it('should validate a valid workOrderProductId', async function() {
            const valid = { workOrderProductId };
            await assert.doesNotReject(() => service.show(valid));
        });

        it('should reject missing workOrderProductId', async function() {
            const invalid = {};
            await assert.rejects(() => service.show(invalid));
        });

        it('should reject invalid workOrderProductId', async function() {
            const invalid = { workOrderProductId: 'not-a-uuid' };
            await assert.rejects(() => service.show(invalid));
        });
    });

    describe('create schema', function() {
        it('should reject missing work_order_id', async function() {
            const invalid = { product_id: productId, };
            await assert.rejects(() => service.create(invalid));
        });

        it('should reject invalid work_order_id', async function() {
            const invalid = { work_order_id: 'John Doe' };
            await assert.rejects(() => service.create(invalid));
        });
    });

    describe('update schema', function() {
        it('should validate with no fields (all optional)', async function() {
            const valid = {workOrderProductId};
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should validate with valid productId', async function() {
            const valid = {workOrderProductId, product_id: productId, };
            await assert.doesNotReject(() => service.update(valid));
        });

        it('should reject invalid payload', async function() {
            const invalid = { email: 'bad-email' };
            await assert.rejects(() => service.update(invalid));
        });
    });

    describe('delete schema', function() {
        it('should validate a valid workOrderProductId', async function() {
            const valid = { workOrderProductId };
            await assert.doesNotReject(() => service.delete(valid));
        });

        it('should reject missing workOrderProductId', async function() {
            const invalid = {};
            await assert.rejects(() => service.delete(invalid));
        });

        it('should reject invalid workOrderProductId', async function() {
            const invalid = { workOrderProductId: 'not-a-uuid' };
            await assert.rejects(() => service.delete(invalid));
        });
    });
});