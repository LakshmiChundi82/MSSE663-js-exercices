import {expect} from 'chai';
import 'mocha';
import {fruits,a,b,afterswap,x,y,food,others,wish} from './array-destructuring';

describe('Array destructuring tests', () => {

    it('#1 should have a variable for every element in the given array', () => {
       
        expect(a).equals(afterswap[0]);
        expect(b).equals(afterswap[1]);
    });

    it('#2 should have a variable for the first 2 elements then spread the rest', () => {
       
      
        expect(x).equals(food[0]),
        expect(y).equals(food[1]),
        expect(others).to.eql(['chocolate', 'pears', 'oats', 'pizza']);
        
 
    });


    it('#3 should construct a statement from the given objarrayect', () => {
    
        
        expect(wish).to.be.eql(["hello", "taylor"]);
       
    });
       
    });

