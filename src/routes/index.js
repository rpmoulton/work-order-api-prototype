import customersRoutes from './customers.js';
import productsRoutes from './products.js';
import workOrdersRoutes from './workOrders.js';
import partsRoutes from './parts.js';
import inventoryRoutes from './inventory.js';
import workOrderPartsRoutes from './workOrderParts.js';
import workOrderProductsRoutes from './workOrderProducts.js';

function setRoutes(app) {
    app.get('/', (req, res) => {
        res.send('Health Check: Express MVC App is running');
    });
    app.use('/customers', customersRoutes);
    app.use('/products', productsRoutes);
    app.use('/workorders', workOrdersRoutes);
    app.use('/parts', partsRoutes);
    app.use('/inventory', inventoryRoutes);
    app.use('/workorderparts', workOrderPartsRoutes);
    app.use('/workOrderProducts', workOrderProductsRoutes);
}

export default setRoutes;