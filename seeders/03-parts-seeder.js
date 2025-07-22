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
} = require('../config/seeder_ids.js');

const partsData = [
  {
    id: PART_ID_1,
    name: 'Part A',
    sku: 'SKU001',
    unit_price: 10.99,
  },
  {
    id: PART_ID_2,
    name: 'Part B',
    sku: 'SKU002',
    unit_price: 15.49,
  },
  {
    id: PART_ID_3,
    name: 'Part C',
    sku: 'SKU003',
    unit_price: 7.25,
  },
  {
    id: PART_ID_4,
    name: 'Part D',
    sku: 'SKU004',
    unit_price: 22.00,
  },
  {
    id: PART_ID_5,
    name: 'Part E',
    sku: 'SKU005',
    unit_price: 5.75,
  },
  {
    id: PART_ID_6,
    name: 'Part F',
    sku: 'SKU006',
    unit_price: 12.30,
  },
  {
    id: PART_ID_7,
    name: 'Part G',
    sku: 'SKU007',
    unit_price: 18.99,
  },
  {
    id: PART_ID_8,
    name: 'Part H',
    sku: 'SKU008',
    unit_price: 9.99,
  },
  {
    id: PART_ID_9,
    name: 'Part I',
    sku: 'SKU009',
    unit_price: 14.50,
  },
  {
    id: PART_ID_10,
    name: 'Part J',
    sku: 'SKU010',
    unit_price: 11.00,
  },
];

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('parts', partsData, {});
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('parts', null, {});
    }
}