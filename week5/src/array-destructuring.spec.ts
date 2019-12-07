import {expect} from 'chai';
import 'mocha';
import {afterswap, others, wish} from './array-destructuring';

describe('Array destructuring tests', () => {

    it('#1 should have a variable for every element in the given array', () => {
        console.log(afterswap);
        expect(afterswap[0]).equal('banana')
    });

    it('#2 should have a variable for the first 2 elements then spread the rest', () => {
        const tempArray = ['chocolate', 'pears', 'oats', 'pizza'];
        const isEqual = JSON.stringify(tempArray) === JSON.stringify(others);
        expect(isEqual).equal(true);
        console.log(tempArray);
    });


    it('#3 should construct a statement from the given objarrayect', () => {
        const value = (['hello', 'taylor!']);
        const isEqual = JSON.stringify(value) === JSON.stringify(wish);
        expect(isEqual).equal(true);
        console.log(value);
    });
});
