'use strict';
import { DataTypes } from "sequelize";

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('work_order_products', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      product_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      work_order_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'work_orders',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('work_order_products');
  }
}