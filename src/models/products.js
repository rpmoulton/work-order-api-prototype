import { DataTypes } from 'sequelize';
const ProductModel = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    model_number: DataTypes.STRING,
    serial_number: DataTypes.STRING,
    customer_id: {
        type: DataTypes.UUID,
        references: {
          model: 'customers',
          key: 'id',
        }
    },
  }, { tableName: 'products', timestamps: false });

  return Product;
}
export default ProductModel;