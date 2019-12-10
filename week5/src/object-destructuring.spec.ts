
import { expect } from 'chai';
import 'mocha';
import {job, nestedObject,person, object1,user, address, wishes} from './object-destructuring'
       
import {id,object,wish,name} from './object-destructuring'

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {

    expect(person).equals(object.name);
    expect(job).equals(object.title);
     // 'elvis'

  });

  it('#2 should have a variable for every property in the given nested object', () => {
    
    expect(user).to.be.equal(nestedObject.user);
    expect(address).to.be.equal(nestedObject.address);
    expect(id).to.be.equal(nestedObject.id);
  });


  it('#3 should create a new object given the destrutured variables from the nested object', () => {
    
    expect(wish + ',' + name +'!').equals("hello,taylor!");  

  });



  it('#4 should construct a statement from the given object', () => {
    expect(object1).eql(nestedObject);
    


  });
});
