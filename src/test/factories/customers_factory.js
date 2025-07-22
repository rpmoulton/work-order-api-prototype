import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export default (model) =>
  Factory.define(({ onCreate, params }) => {
    onCreate((customer) => model.create(customer));

    const data = params;
    return {
        id: data?.id ?? uuidv4(),
        name: data?.model_number ?? faker.lorem.word(),
        email: data?.serial_number ?? faker.lorem.word(),
        phone: data?.customer_id ?? faker.lorem.word(),
    };
  });
