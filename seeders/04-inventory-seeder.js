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
    INVENTORY_ID_1,
    INVENTORY_ID_2,
    INVENTORY_ID_3,
    INVENTORY_ID_4,
    INVENTORY_ID_5,
    INVENTORY_ID_6,
    INVENTORY_ID_7,
    INVENTORY_ID_8,
    INVENTORY_ID_9,
    INVENTORY_ID_10,
} = require('../config/seeder_ids.js');

const inventoryData = [
  {
    id: INVENTORY_ID_1,
    part_id: PART_ID_1,
    location: 'Warehouse A',
    quantity_on_hand: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: INVENTORY_ID_2,
    part_id: PART_ID_2,
    location: 'Warehouse B',
    quantity_on_hand: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: INVENTORY_ID_3,
    part_id: PART_ID_3,
    location: 'Warehouse C',
    quantity_on_hand: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: INVENTORY_ID_4,
    part_id: PART_ID_4,
    location: 'Warehouse D',
    quantity_on_hand: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: INVENTORY_ID_5,
    part_id: PART_ID_5,
    location: 'Warehouse E',
    quantity_on_hand: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: INVENTORY_ID_6,
    part_id: PART_ID_6,
    location: 'Warehouse F',
    quantity_on_hand: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: INVENTORY_ID_7,
    part_id: PART_ID_7,
    location: 'Warehouse G',
    quantity_on_hand: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: INVENTORY_ID_8,
    part_id: PART_ID_8,
    location: 'Warehouse H',
    quantity_on_hand: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: INVENTORY_ID_9,
    part_id: PART_ID_9,
    location: 'Warehouse I',
    quantity_on_hand: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: INVENTORY_ID_10,
    part_id: PART_ID_10,
    location: 'Warehouse J',
    quantity_on_hand: Math.floor(Math.random() * 100) + 1,
  },
];

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('inventory', inventoryData);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('inventory', null, {});
    },
}