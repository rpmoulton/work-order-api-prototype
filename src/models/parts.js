const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Part = sequelize.define('Part', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    sku: DataTypes.STRING,
    unit_price: DataTypes.DECIMAL(10, 2),
  }, { tableName: 'parts', timestamps: false });

  return Part;
};