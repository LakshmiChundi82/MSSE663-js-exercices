// #1 Object Destructuring
export const object = { name: 'elvis', title: 'hip swinger' };

export const {name :person} =object;
export const {title :job} =object;

// console.log(person); // 'elvis'
// console.log(job); // 'hip swinger'


// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};
//console.log(nestedObject.user); // 'elvis'
// console.log(address); // { city: 'denver', state: 'colorado' }
// console.log(id); // 1


// #3 Object with key value pairs: construct a statement

export const wish ={ greeting: 'hello', name: 'taylor!' }

//console.log(wish.greeting,wish.name);

//  'hello, taylor!'


//  #4 Create a new object given the destrutured values above

export const wishe ={ greeting: 'hello', name: 'taylor!' }
const wish1 = (greeting: string, name: string) =>
    ` ${greeting} ${name}!`

wish1(wishe.greeting,wishe.name);


