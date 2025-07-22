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
} = require('../config/seeder_ids.js');

const customers = [
  {
    id: CUSTOMER_ID_1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-0101',
  },
  {
    id: CUSTOMER_ID_2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '555-0102',
  },
  {
    id: CUSTOMER_ID_3,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phone: '555-0103',
  },
  {
    id: CUSTOMER_ID_4,
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    phone: '555-0104',
  },
  {
    id: CUSTOMER_ID_5,
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    phone: '555-0105',
  },
  {
    id: CUSTOMER_ID_6,
    name: 'Diana Evans',
    email: 'diana.evans@example.com',
    phone: '555-0106',
  },
  {
    id: CUSTOMER_ID_7,
    name: 'Ethan Foster',
    email: 'ethan.foster@example.com',
    phone: '555-0107',
  },
  {
    id: CUSTOMER_ID_8,
    name: 'Fiona Green',
    email: 'fiona.green@example.com',
    phone: '555-0108',
  },
  {
    id: CUSTOMER_ID_9,
    name: 'George Harris',
    email: 'george.harris@example.com',
    phone: '555-0109',
  },
  {
    id: CUSTOMER_ID_10,
    name: 'Hannah Ivers',
    email: 'hannah.ivers@example.com',
    phone: '555-0110',
  },
];

module.exports = {
  up: async (queryInterface) => {
    try {
      await queryInterface.bulkInsert('customers', customers, {});
    } catch (e) {
      console.log(e);
    }
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('customers', null, {});
  }
};