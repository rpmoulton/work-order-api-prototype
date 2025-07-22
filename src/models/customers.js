import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    tableName: 'customers',
    timestamps: false
});

  return Customer;
};