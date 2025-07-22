const {
    PART_ID_1,
    PART_ID_2,
    PART_ID_3,
    PART_ID_4,
    PART_ID_5,
    PART_ID_6,
    PART_ID_7,
    PART_ID_8,
    PART_ID_9,
    PART_ID_10,
    WORK_ORDER_PART_ID_1,
    WORK_ORDER_PART_ID_2,
    WORK_ORDER_PART_ID_3,
    WORK_ORDER_PART_ID_4,
    WORK_ORDER_PART_ID_5,
    WORK_ORDER_PART_ID_6,
    WORK_ORDER_PART_ID_7,
    WORK_ORDER_PART_ID_8,
    WORK_ORDER_PART_ID_9,
    WORK_ORDER_PART_ID_10,
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
const PART_IDS = [
  PART_ID_1, PART_ID_2, PART_ID_3, PART_ID_4, PART_ID_5,
  PART_ID_6, PART_ID_7, PART_ID_8, PART_ID_9, PART_ID_10,
];
const WORK_ORDER_PART_IDS = [
  WORK_ORDER_PART_ID_1, WORK_ORDER_PART_ID_2, WORK_ORDER_PART_ID_3, WORK_ORDER_PART_ID_4, WORK_ORDER_PART_ID_5,
  WORK_ORDER_PART_ID_6, WORK_ORDER_PART_ID_7, WORK_ORDER_PART_ID_8, WORK_ORDER_PART_ID_9, WORK_ORDER_PART_ID_10,
];
const WORK_ORDER_IDS = [
  WORK_ORDER_ID_1, WORK_ORDER_ID_2, WORK_ORDER_ID_3, WORK_ORDER_ID_4, WORK_ORDER_ID_5,
  WORK_ORDER_ID_6, WORK_ORDER_ID_7, WORK_ORDER_ID_8, WORK_ORDER_ID_9, WORK_ORDER_ID_10,
];

const workOrderPartsSeeder = {
  up: async (queryInterface) => {
    const workOrderParts = [];
    for (let i = 0; i < 10; i++) {
      workOrderParts.push({
        id: WORK_ORDER_PART_IDS[i],
        work_order_id: WORK_ORDER_IDS[i],
        part_id: PART_IDS[i],
        quantity_used: Math.floor(Math.random() * 10) + 1, // Random quantity between 1 and 10
        create_ts: new Date(),
      });
    }
    await queryInterface.bulkInsert('work_order_parts', workOrderParts);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('work_order_parts', null, {});
  },
};

module.exports = workOrderPartsSeeder;