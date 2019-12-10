// #1 Variable swapping
export const fruits = ['apple', 'banana'];

export let  [a,b]=fruits;
// Currently, I would get the following returns:
console.log(a); // 'apple'
console.log(b); // 'banana'

export const afterswap =[a,b]=[b,a];

// After swapping Values
console.log(a); 
console.log(b);



// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
export const [x,y, ...others] =food

console.log(x); // 'apple'
console.log(y); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']



// #3 Array: Contruct a statement

export const wish =['hello', 'taylor'];
export let [wishes,name]=wish;
console.log(wishes,",",name,"!");


// 'hello, taylor!'


