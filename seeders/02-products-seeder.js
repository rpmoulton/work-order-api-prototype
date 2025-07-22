const {
    PRODUCT_ID_1,
    PRODUCT_ID_2,
    PRODUCT_ID_3,
    PRODUCT_ID_4,
    PRODUCT_ID_5,
    PRODUCT_ID_6,
    PRODUCT_ID_7,
    PRODUCT_ID_8,
    PRODUCT_ID_9,
    PRODUCT_ID_10,
    CUSTOMER_ID_1,
    CUSTOMER_ID_2,
    CUSTOMER_ID_3,
    CUSTOMER_ID_4,
    CUSTOMER_ID_5,
    CUSTOMER_ID_6,
    CUSTOMER_ID_7,
    CUSTOMER_ID_8,
    CUSTOMER_ID_9,
    CUSTOMER_ID_10,
} = require('../config/seeder_ids.js');

const products = [
  {
    id: PRODUCT_ID_1,
    model_number: 'Model-001',
    serial_number: 'SN-001',
    customer_id: CUSTOMER_ID_1,
  },
  {
    id: PRODUCT_ID_2,
    model_number: 'Model-002',
    serial_number: 'SN-002',
    customer_id: CUSTOMER_ID_2,
  },
  {
    id: PRODUCT_ID_3,
    model_number: 'Model-003',
    serial_number: 'SN-003',
    customer_id: CUSTOMER_ID_3,
  },
  {
    id: PRODUCT_ID_4,
    model_number: 'Model-004',
    serial_number: 'SN-004',
    customer_id: CUSTOMER_ID_4,
  },
  {
    id: PRODUCT_ID_5,
    model_number: 'Model-005',
    serial_number: 'SN-005',
    customer_id: CUSTOMER_ID_5,
  },
  {
    id: PRODUCT_ID_6,
    model_number: 'Model-006',
    serial_number: 'SN-006',
    customer_id: CUSTOMER_ID_6,
  },
  {
    id: PRODUCT_ID_7,
    model_number: 'Model-007',
    serial_number: 'SN-007',
    customer_id: CUSTOMER_ID_7,
  },
  {
    id: PRODUCT_ID_8,
    model_number: 'Model-008',
    serial_number: 'SN-008',
    customer_id: CUSTOMER_ID_8,
  },
  {
    id: PRODUCT_ID_9,
    model_number: 'Model-009',
    serial_number: 'SN-009',
    customer_id: CUSTOMER_ID_9,
  },
  {
    id: PRODUCT_ID_10,
    model_number: 'Model-010',
    serial_number: 'SN-010',
    customer_id: CUSTOMER_ID_10,
  },
];

module.exports = {
    up: async (queryInterface) => {
        try {
            await queryInterface.bulkInsert('products', products, {});
        } catch (e) {
            console.log(e);
        }
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('products', null, {});
    }
}