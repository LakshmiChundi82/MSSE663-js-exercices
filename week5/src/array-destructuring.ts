// #1 Variable swapping
export const fruits = ['apple', 'banana'];

export let  [a,b] =fruits;

// Currently, I would get the following returns:
// console.log(a); // 'apple'
// console.log(b); // 'banana'
export let afterswap=[a, b] = [b, a];


// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];
export let [, , ...others] =food;
// console.log(a); // 'apple'
// console.log(b); // 'banana'
// console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']



// #3 Array: Contruct a statement

export const wish =['hello', 'taylor!'];
export let [x, y]= wish;


// 'hello, taylor!'
