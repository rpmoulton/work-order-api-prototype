import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export default (model) =>
  Factory.define(({ onCreate, params }) => {
    onCreate((product) => model.create(product));

    const data = params;
    return {
        id: data.id ?? uuidv4(),
        model_number: data.model_number ?? faker.lorem.word(),
        serial_number: data.serial_number ?? faker.lorem.word(),
        customer_id: data.customer_id ?? uuidv4(),
    };
  });
