import { expect } from 'chai';
import 'mocha';

import {newArr, filtereFunctionWithKey, thingsList} from "./higher-order-funcs";

describe('Higher Order Function tests', () => {
    it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {});



    expect(newArr[0]).to.be.eql({ id: 0, name: 'thing1' });
    expect(newArr[1]).to.be.eql({ id: 1, name: 'thing2' });

    it('#2 should return a single thing from array of things objects after hoisting and currying', () => {});

    expect(filtereFunctionWithKey(thingsList, 'thing1')[0].value).to.be.eql('thing1');
});
