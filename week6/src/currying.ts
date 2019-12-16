// #1 Convert this javascript function to a curried function
export function curryMe(string1, string2, string3): string {
    return string1 + ' ' + string2 + ' ' + string3;

}

// source code here

export function curryMe1(string1) {
    return (string2) => {
        return (string3) => {
            return string1 + ' ' + string2 + ' ' + string3
        }
    }
}


// export const curryMe1 =(string1)=>(string2)=>(string3):string=>{

//                     return string1 + ' ' + string2 + ' ' + string3
//                 }
            
//     console.log(curryMe1('one ')(' two ')(' three '));


// #2 Hoist and convert nested functions to curried functions
export function doMath(a) {
    return function add(b) {
        return function subtract(c) {
            return a + b - c;
        };
    };
}

// source code here

export function doMath1(a) {
    return (b) => {
        return (c) => {
            return a + b - c;
        };
    };
}

// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export const ninjasOne = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Leonardo', belt: 'black' },
    { name: 'Mr. Miyagi', belt: 'black' },
    { name: 'Rocky', belt: 'black' },
    { name: 'Colt', belt: 'green' },
    { name: 'Tum Tum', belt: 'white' },
    { name: 'Haru', belt: 'white' },
    { name: 'The Bride', belt: 'black' },
    { name: 'Cammy', belt: 'black' },
    { name: 'Wong Fei-hung', belt: 'green' }
];



export const ninjasTwo = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Jim', belt: 'black' },
    { name: 'The Rat', belt: 'black' }
];

// // source code here
export function findBlackbeltNinjas(a) {
        a = a.filter(eachNinja => eachNinja.belt === 'black');
        return (b) => {
            b = b.filter(eachNija => eachNija.belt === 'black');
            console.log([...a, ...b]);
            return [...a, ...b];
        };
}


/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

export const statusTypes = {
    white: 'grasshopper',
    green: 'warrior',
    black: 'sensei'
};

export const gamerStatusTypes = {
    white: 'Noob',
    green: 'Choob',
    black: 'Legend'
};

// source code here


export function addStatusCodesToNinjas(a) {
    let arrayBkp: Array<any> = [];
    return (b) => {
        return (c) => {
            a.forEach(value => {
                switch (value.belt) {
                    case "black":
                        value.status = c.black;
                        arrayBkp.push(value);
                        break;
                    case "green":
                        value.status = c.green;
                        arrayBkp.push(value);
                        break;
                    case "white":
                        value.status = c.white;
                        arrayBkp.push(value);
                        break;
                    default:
                        break;
                }
            });

            b.forEach(value => {
                switch (value.belt) {
                    case "black":
                        value.status = c.black;
                        arrayBkp.push(value);
                        break;
                    case "green":
                        value.status = c.green;
                        arrayBkp.push(value);
                        break;
                    case "white":
                        value.status = c.white;
                        arrayBkp.push(value);
                        break;
                    default:
                        break;
                        
                }
            });
            return arrayBkp;

           
        };

        
        
    };
    

}

