const {
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

const workOrders = [
  {
    id: WORK_ORDER_ID_1,
    customer_id: CUSTOMER_ID_1,
    status: 'Pending',
    priority: 'High',
    created_at: new Date(),
    scheduled_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
    completed_at: null,
  },
  {
    id: WORK_ORDER_ID_2,
    customer_id: CUSTOMER_ID_2,
    status: 'In Progress',
    priority: 'Medium',
    created_at: new Date(),
    scheduled_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
    completed_at: null,
  },
  {
    id: WORK_ORDER_ID_3,
    customer_id: CUSTOMER_ID_3,
    status: 'Completed',
    priority: 'Low',
    created_at: new Date(),
    scheduled_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    completed_at: new Date(),
  },
  {
    id: WORK_ORDER_ID_4,
    customer_id: CUSTOMER_ID_4,
    status: 'Pending',
    priority: 'High',
    created_at: new Date(),
    scheduled_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    completed_at: null,
  },
  {
    id: WORK_ORDER_ID_5,
    customer_id: CUSTOMER_ID_5,
    status: 'In Progress',
    priority: 'Medium',
    created_at: new Date(),
    scheduled_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
    completed_at: null,
  },
  {
    id: WORK_ORDER_ID_6,
    customer_id: CUSTOMER_ID_6,
    status: 'Completed',
    priority: 'Low',
    created_at: new Date(),
    scheduled_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
    completed_at: new Date(),
  },
  {
    id: WORK_ORDER_ID_7,
    customer_id: CUSTOMER_ID_7,
    status: 'Pending',
    priority: 'High',
    created_at: new Date(),
    scheduled_date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000), // 8 days from now
    completed_at: null,
  },
  {
    id: WORK_ORDER_ID_8,
    customer_id: CUSTOMER_ID_8,
    status: 'In Progress',
    priority: 'Medium',
    created_at: new Date(),
    scheduled_date: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), // 12 days from now
    completed_at: null,
  },
  {
    id: WORK_ORDER_ID_9,
    customer_id: CUSTOMER_ID_9,
    status: 'Completed',
    priority: 'Low',
    created_at: new Date(),
    scheduled_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    completed_at: new Date(),
  },
  {
    id: WORK_ORDER_ID_10,
    customer_id: CUSTOMER_ID_10,
    status: 'Pending',
    priority: 'High',
    created_at: new Date(),
    scheduled_date: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // 6 days from now
    completed_at: null,
  },
];

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('work_orders', workOrders, {});
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('work_orders', null, {});
    },
}