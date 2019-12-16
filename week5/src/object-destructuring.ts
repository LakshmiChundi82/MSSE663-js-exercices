// #1 Object Destructuring

export const object = { name: 'elvis', title: 'hip swinger' };

export const {name :person,title:job} =object;


console.log(person); // 'elvis'
console.log(job); // 'hip swinger'


// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};

export const {user : user, address:address,id:id}= nestedObject;
console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1


// #3 Object with key value pairs: construct a statement

export const wishes ={wish :"hello", name:"taylor"};
export const {wish, name}=wishes;
console.log(wish,",",name,"!");
// 'hello, taylor!'


//  #4 Create a new o;bject given the destrutured values above

export const object1={user : user, address:address,id:id};
console.log(object1);


