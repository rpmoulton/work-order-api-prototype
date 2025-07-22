'use strict';
import { DataTypes } from "sequelize";

export default {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('customers', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
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
        return queryInterface.dropTable('customers');
    }
};
