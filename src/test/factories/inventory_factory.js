import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export default (model) =>
  Factory.define(({ onCreate, params }) => {
    onCreate((inventory) => model.create(inventory));

    const data = params[0];
    return {
        id: data.id ?? uuidv4(),
        part_id: data.model_number ?? uuidv4(),
        location: data.serial_number ?? faker.lorem.word(),
        quantity_on_hand: data.customer_id ?? faker.lorem.word(),
    };
  });