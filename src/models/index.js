import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Sequelize from 'sequelize';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = {};

const initializeDatabase = async () => {
  let sequelize;
  try {
      sequelize = new Sequelize({
        dialect: "sqlite",
        storage: "./db.development.sqlite",
        seederStorage: "sequelize",
        underscored: true,
        //logging: console.log,
        logging: false,
    });

    await sequelize.authenticate();

    const files = fs.readdirSync(__dirname)
      .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'));

    for (const file of files) {
      const modelDef = await import(path.join('file://', __dirname, file));
      const model = modelDef.default(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }

    Object.keys(db).forEach((modelName) => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });

    // Associations
    db.Customer.hasMany(db.Product, { foreignKey: 'customer_id' });
    db.Product.belongsTo(db.Customer, { foreignKey: 'customer_id' });

    db.Customer.hasMany(db.WorkOrder, { foreignKey: 'customer_id' });
    db.WorkOrder.belongsTo(db.Customer, { foreignKey: 'customer_id' });

    db.WorkOrder.belongsToMany(db.Part, { through: db.WorkOrderPart, foreignKey: 'work_order_id', otherKey: 'part_id' });
    db.Part.belongsToMany(db.WorkOrder, { through: db.WorkOrderPart, foreignKey: 'part_id', otherKey: 'work_order_id' });

    db.Part.hasOne(db.Inventory, { foreignKey: 'part_id' });
    db.Inventory.belongsTo(db.Part, { foreignKey: 'part_id' });


    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

  } catch (error) {
    console.error('Unable to connect to the database or associate models:', error);
    process.exit(1);
  }
};

// This is an async module, so we can use top-level await.
await initializeDatabase();

export default db;
