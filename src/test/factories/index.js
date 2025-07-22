import customerFactory from './customers_factory.js';
import inventoryFactory from './inventory_factory.js';
import partsFactory from './parts_factory.js';
import productsFactory from './products_factory.js';
import workOrderPartsFactory from './workOrderParts_factory.js';
import workOrderProductsFactory from './workOrderProducts_factory.js';
import workOrdersFactory from './workOrders_factory.js';
let Models;

export const factories = {
    Customer: customerFactory,
    Inventory: inventoryFactory,
    Part: partsFactory,
    Product: productsFactory,
    WorkOrderPart: workOrderPartsFactory,
    WorkOrderProduct: workOrderProductsFactory,
    WorkOrder: workOrdersFactory,
};

const modelFactories = {};

const factory = {
  create: (modelName, ...args) => modelFactories[modelName].create(...args),
  createMany: (modelName, ...args) => {
    if (Array.isArray(args[0])) {
      return modelFactories[modelName].createList(args[0].length, args[0]);
    } else {
      return modelFactories[modelName].createList(...args);
    }
  },
};

before(async () => {
  const modelsModule = await import('../../models/index.js');
  Models = modelsModule.default;
  for (const modelName in factories) {
    if (Models[modelName]) {
        modelFactories[modelName] = factories[modelName](Models[modelName]);
    }
  }
});

after(async () => {
    await clean();
});

const clean = async () => {
  const Models = await getModels();
  await Models.sequelize.sync({ force: true });
};

let getModels = () => Models;

export default {
    getModels,
    factory,
    clean,
}