'use strict';
import { DataTypes } from "sequelize";

export default {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('products', {
            id: {
              type: DataTypes.UUID,
              primaryKey: true,
              defaultValue: DataTypes.UUIDV4,
            },
            model_number: DataTypes.STRING,
            serial_number: DataTypes.STRING,
            customer_id: {
                type: DataTypes.UUID,
                references: {
                  model: 'customers',
                  key: 'id',
                }
            },
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
        return queryInterface.dropTable('products');
    }
};
