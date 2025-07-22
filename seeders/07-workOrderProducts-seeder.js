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
    WORK_ORDER_ID_1,
    WORK_ORDER_ID_2,
    WORK_ORDER_ID_3,
    WORK_ORDER_ID_4,
    WORK_ORDER_ID_5,
    WORK_ORDER_ID_6,
    WORK_ORDER_ID_7,
    WORK_ORDER_ID_8,
    WORK_ORDER_ID_9,
    WORK_ORDER_ID_10,
} = require('../config/seeder_ids.js');

const inventoryData = [
  {
    id: PRODUCT_ID_1,
    work_order_id: WORK_ORDER_ID_1,
    product_id: PRODUCT_ID_1,
  },
  {
    id: PRODUCT_ID_2,
    work_order_id: WORK_ORDER_ID_2,
    product_id: PRODUCT_ID_2,
  },
  {
    id: PRODUCT_ID_3,
    work_order_id: WORK_ORDER_ID_3,
    product_id: PRODUCT_ID_3,
  },
  {
    id: PRODUCT_ID_4,
    work_order_id: WORK_ORDER_ID_4,
    product_id: PRODUCT_ID_4,
  },
  {
    id: PRODUCT_ID_5,
    work_order_id: WORK_ORDER_ID_5,
    product_id: PRODUCT_ID_5,
  },
  {
    id: PRODUCT_ID_6,
    work_order_id: WORK_ORDER_ID_6,
    product_id: PRODUCT_ID_6,
  },
  {
    id: PRODUCT_ID_7,
    work_order_id: WORK_ORDER_ID_7,
    product_id: PRODUCT_ID_7,
  },
  {
    id: PRODUCT_ID_8,
    work_order_id: WORK_ORDER_ID_8,
    product_id: PRODUCT_ID_8,
  },
  {
    id: PRODUCT_ID_9,
    work_order_id: WORK_ORDER_ID_9,
    product_id: PRODUCT_ID_9,
  },
  {
    id: PRODUCT_ID_10,
    work_order_id: WORK_ORDER_ID_10,
    product_id: PRODUCT_ID_10,
  },
];

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('work_order_products', inventoryData);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('work_order_products', null, {});
    },
}