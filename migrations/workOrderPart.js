'use strict';
import { DataTypes } from "sequelize";

export default {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('work_order_parts', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            work_order_id: {
                type: DataTypes.UUID,
                references: { 
                    model: 'work_orders',
                    key: 'id',
                },
            },
            part_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'parts',
                    key: 'id',
                },
            },
            quantity_used: DataTypes.INTEGER,
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
        return queryInterface.dropTable('work_order_parts');
    }
};
