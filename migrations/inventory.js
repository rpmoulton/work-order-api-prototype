'use strict';
import { DataTypes } from "sequelize";

export default {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('inventory', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            part_id: {
                type: DataTypes.UUID,
                references: {
                model: 'parts',
                key: 'id',
                },
            },
            location: DataTypes.STRING,
            quantity_on_hand: DataTypes.INTEGER,
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
        return queryInterface.dropTable('inventory');
    }
};
