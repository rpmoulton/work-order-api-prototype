const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Inventory = sequelize.define('Inventory', {
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
  }, { tableName: 'inventory', timestamps: false });

  return Inventory;
};