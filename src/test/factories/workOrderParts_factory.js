import { Factory } from 'fishery';
import { v4 as uuidv4 } from 'uuid';

export default (model) =>
  Factory.define(({ onCreate, params }) => {
    onCreate((workOrderPart) => model.create(workOrderPart));

    const data = params;
    return {
        id: data.id ?? uuidv4(),
        work_order_id: data.work_order_id ?? uuidv4(),
        part_id: data.part_id ?? uuidv4(),
    };
  });
