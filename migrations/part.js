'use strict';
import { DataTypes } from "sequelize";

export default {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('parts', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            name: DataTypes.STRING,
            sku: DataTypes.STRING,
            unit_price: DataTypes.DECIMAL(10, 2),
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
        return queryInterface.dropTable('parts');
    }
};
