import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export default (model) =>
  Factory.define(({ onCreate, params }) => {
    onCreate((part) => model.create(part));

    const data = params;
    return {
        id: data.id ?? uuidv4(),
        name: data.model_number ?? faker.lorem.word(),
        sku: data.serial_number ?? faker.lorem.word(),
        unit_price: data.unit_price ?? faker.lorem.word(),
    };
  });
