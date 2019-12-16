// /**
//  * #1 Higher order things.
//  *
//  * - Map the values to produce the result:
//  *
//  * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
//  *
//  * - Then Hoist the callback function.
//  *
export const things = ['thing1', 'thing2'];

export let thingsMap = new Map();

export let newArr = things.map((val, i, arr) => {
    return {
        id: i,
        name: val,
    };
});


/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from 1 to return a single thing object.
 * - Hoist that filter callback and curry all functions.
 */

export const thingsList = [
    {key: '1', value: 'thing1'},
    {key: '2', value: 'thing2'},
    {key: '3', value: 'thing3'},
    {key: '4', value: 'thing4'}
];

export function filtereFunctionWithKey(arr: any, keyValue: String) {
    return arr.filter(function (thing) {
        return thing.value == keyValue;
    });
}

console.log(filtereFunctionWithKey(thingsList, 'thing1')[0]);


