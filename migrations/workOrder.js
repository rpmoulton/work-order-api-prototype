'use strict';
import { DataTypes } from "sequelize";

export default {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('work_orders', {
            id: {
              type: DataTypes.UUID,
              primaryKey: true,
              defaultValue: DataTypes.UUIDV4,
            },
            customer_id: {
              type: DataTypes.UUID,
              references: {
                model: 'customers',
                key: 'id',
              }
            },
            status: DataTypes.STRING,
            priority: DataTypes.STRING,
            created_at: DataTypes.DATE,
            scheduled_date: DataTypes.DATE,
            completed_at: DataTypes.DATE,
            create_ts: {
                type: Sequelize.DATE,
                allowNull: true
            },
            delete_ts: {
                type: Sequelize.DATE,
                allowNull: true
            },
            cancel_ts: {
                type: Sequelize.DATE,
                allowNull: true
            },
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('work_orders');
    }
};
