import { expect } from 'chai';
import 'mocha';
import {person, job, nestedObject,wish,wishe} from './object-destructuring'


describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {



    expect(person).equal('elvis');
    expect(job).equal('hip swinger');
    console.log(person); // 'elvis'
console.log(job); // 

  });

  it('#2 should have a variable for every property in the given nested object', () => {


    expect(nestedObject.user).equal('elvis');

    const temp = {city: 'denver', state: 'colorado'};
    const isEqual = JSON.stringify(temp) === JSON.stringify(nestedObject.address);
    expect(isEqual).equal(true);
    expect(nestedObject.id).equal(1);
    console.log(temp);
    console.log(nestedObject.user);
    console.log(nestedObject.id);

  });


  it('#3 should create a new object given the destrutured variables from the nested object', () => {

    const temp1=  { greeting: 'hello', name: 'taylor!' };
    const isEqual = JSON.stringify(temp1) === JSON.stringify(wish);
    expect(isEqual).equal(true);
    console.log(wish.greeting,wish.name);


  });



  it('#4 should construct a statement from the given object', () => {


    const wishes =  { greeting: 'hello', name: 'taylor!' };
    const isEqual = JSON.stringify(wishes) === JSON.stringify(wishe);
    expect(isEqual).equal(true);
    console.log(wishe.greeting,wishe.name);


  });
});
