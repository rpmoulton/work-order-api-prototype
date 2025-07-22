import { Factory } from 'fishery';
import { v4 as uuidv4 } from 'uuid';

export default (model) =>
  Factory.define(({ onCreate, params }) => {
    onCreate((workOrderProduct) => model.create(workOrderProduct));

    const data = params;
    return {
        id: data.id ?? uuidv4(),
        work_order_id: data.work_order_id ?? uuidv4(),
        product_id: data.product_id ?? uuidv4(),
    };
  });
