const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const WorkOrderProduct = sequelize.define('WorkOrderProduct', {
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
    product_id: {
        type: DataTypes.UUID,
        references: {
            model: 'parts',
            key: 'id',
        },
    },
  }, { tableName: 'work_order_products', timestamps: false });

  return WorkOrderProduct;
};