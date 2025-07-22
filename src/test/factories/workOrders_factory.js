import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export default (model) =>
  Factory.define(({ onCreate, params }) => {
    onCreate((workOrder) => model.create(workOrder));

    const data = params;
    return {
        id: data.id ?? uuidv4(),
        customer_id: data.customer_id ?? uuidv4(),
        status: data.status ?? faker.lorem.word(),
        priority: data.priority ?? faker.lorem.word(),
        created_at: data.created_at ?? new Date(),
        scheduled_date: data.scheduled_date ?? new Date(),
        completed_at: data.completed_at ?? new Date(),
    };
  });
