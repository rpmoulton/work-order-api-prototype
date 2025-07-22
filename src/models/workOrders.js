const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const WorkOrder = sequelize.define('WorkOrder', {
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
  }, { tableName: 'work_orders', timestamps: false });

  return WorkOrder;
};