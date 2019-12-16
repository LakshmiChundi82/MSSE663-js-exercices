import { expect } from 'chai';
import 'mocha';
import {curryMe1, curryMe, doMath1, findBlackbeltNinjas, ninjasOne, ninjasTwo,addStatusCodesToNinjas,statusTypes,gamerStatusTypes} from "./currying";

describe('Currying tests', () => {

    it('#1 should output the same result as the original function', () => {});


    expect(curryMe1('one')('two')('three')).to.be.eql('one two three');
    expect(doMath1(10)(20)(10)).to.be.equal(20);


    it('#2 should output the same result as the original function', () => {});


    it('#3 should return an array containing the ninjas who have a black belt', () => {});

    expect(findBlackbeltNinjas(ninjasOne)(ninjasTwo)[0].belt).to.be.equal('black');

    it('#4 should return a new array of ninja objects with "status" added to each object', () => {});

    
    expect(addStatusCodesToNinjas(ninjasOne)(ninjasTwo)(statusTypes));
    
    expect(addStatusCodesToNinjas(ninjasOne)(ninjasTwo)(gamerStatusTypes));
});
