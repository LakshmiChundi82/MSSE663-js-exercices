import { expect } from 'chai';
import 'mocha';

import {copyarr, originalUpdates} from './spread';

describe ('test for spread.ts',()=>{

    it('should output array ',() => {
        expect(copyarr[0]).equal(1);
        console.log(copyarr);
    });
});

// 2.Combining Arrays

import {winners, combinedArray, originalPersons} from './spread';
import { originalNumbers } from './spread';

describe ('test for combine arrays',()=>{

    it('should output array ',() => {
        console.log(combinedArray);
        expect(combinedArray[0]).equal('first');

    });
});

//  3.Combine of Objects
describe ('test for combine objects',()=>{
    it('should combine objects ',() => {
        console.log(originalPersons)
        expect(originalPersons['boy']).equal('Kyle');
    });
});

  // #4 Modifying values in arrays of objects

  describe ('test for Values in arrays  objects',()=>{
    it('should combine array objects ',() => {
        console.log(originalUpdates);
        expect(originalUpdates[1].task.includes('Do the other thing...again'));
    });
});
