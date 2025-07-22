const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const WorkOrderPart = sequelize.define('WorkOrderPart', {
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
  }, { tableName: 'work_order_parts', timestamps: false });

  return WorkOrderPart;
};